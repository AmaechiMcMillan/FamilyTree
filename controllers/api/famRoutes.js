const router = require('express').Router();
const { Fam } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFam = await Fam.create({
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
    const famData = await Fam.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!famData) {
      res.status(404).json({ message: 'No family found with this id!' });
      return;
    }

    res.status(200).json(famData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
