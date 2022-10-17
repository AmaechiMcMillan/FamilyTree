const router = require('express').Router();

const memberRoutes = require('./memberRoutes');
const homeRoutes = require('./homeRoutes')

router.use('/', memberRoutes);
router.use('/',homeRoutes);

module.exports = router;
