const router = require('express').Router();
const userRoutes = require('./userRoutes');
const famRoutes = require('./famRoutes');

router.use('/user', userRoutes);
router.use('/fam', famRoutes);

module.exports = router;
