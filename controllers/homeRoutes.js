const router = require('express').Router();
const  User  = require('../models');
const  Tree  = require('../models');
const withAuth = require('../utils/auth');
async function loadhack(){
  const {syncTree} = await import('../utils/hack.js');
  return syncTree;
}

router.get('/', async (req, res) => {
  try {
    loadhack()
    const treeData = await Tree.findAll({
      include: [
        {
          model: Tree,
          attributes: ['name'],
        },
        {
          model: Tree,
        },
      ],
    });

    const tree = treeData.map((tree) => tree.get({ plain: true }));

    res.render('homepage', { 
      tree, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tree/', async (req, res) => {
  try {
    loadhack();
    const treeData = await Tree.findByPk(req.params.id, {
      include: [
        {
     
          attributes: ['name'],
        },
        {
          model: Tree,
        },
      ],
    });

    const tree = treeData.get({ plain: true });

    res.render('tree', {
      ...tree,
    });
    console.log(tree)
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tree }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
