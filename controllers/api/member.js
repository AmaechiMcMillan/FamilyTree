const router = require('express').Router();
const { Member } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/:id', withAuth, async (req, res) => {
  try {
    const MemberData = await Member.any({
     include: [{ model: Member}]
    });

    if (!MemberData) {
      res.status(404).json({ message: 'No relative found with this id!' });
      return;
    }

    res.status(200).json(MemberData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
  try {
    const newMember = await Member.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMember);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const MemberData = await Member.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!MemberData) {
      res.status(404).json({ message: 'No family tree found with this id!' });
      return;
    }

    res.status(200).json(MemberData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
