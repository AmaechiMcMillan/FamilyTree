const router = require('express').Router();
const userRoutes = require('./userRoutes');
const treeRoutes = require('./treeRoutes');

router.use('/user', userRoutes);
router.use('/tree', treeRoutes);

module.exports = router;
