const router = require('express').Router();
const { Tree } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/:id', withAuth, async (req, res) => {
  try {
    const treeData = await Tree.any({
     include: [{ model: Tree}]
    });

    if (!treeData) {
      res.status(404).json({ message: 'No relative found with this id!' });
      return;
    }

    res.status(200).json(treeData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
  try {
    const newFam = await Tree.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFam);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const treeData = await Tree.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!treeData) {
      res.status(404).json({ message: 'No family tree found with this id!' });
      return;
    }

    res.status(200).json(treeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
