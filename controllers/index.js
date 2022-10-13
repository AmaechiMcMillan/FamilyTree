const router = require('express').Router();

const apiRoutes = require('./api');
const familyRoutes = require('./familyRoutes');

router.use('/', familyRoutes);
router.use('/api', apiRoutes);

module.exports = router;
