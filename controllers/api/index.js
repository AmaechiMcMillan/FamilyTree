const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD
const famRoutes = require('./famRoutes');

router.use('/user', userRoutes);
router.use('/fam', famRoutes);
=======

router.use('/users', userRoutes);
>>>>>>> d5e56fbd7d89cfecb2c6225a5d9ce07d0f436c2d

module.exports = router;
