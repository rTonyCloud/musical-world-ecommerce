const router = require('express').Router();
const productsRoutes = require('./products-routes.js');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/products', productsRoutes)

module.exports = router;
