const router = require('express').Router();
const { Fam, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const famData = await Fam.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Fam,
        },
      ],
    });

    const fam = famData.map((fam) => fam.get({ plain: true }));

    res.render('homepage', { 
      fam, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/fam/:id', async (req, res) => {
  try {
    const famData = await Fam.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Fam,
        },
      ],
    });

    const fam = famData.get({ plain: true });

    res.render('fam', {
      ...fam,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Fam }],
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