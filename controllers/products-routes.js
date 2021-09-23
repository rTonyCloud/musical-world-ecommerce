const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product } = require('../models');


router.get('/', async (req, res) => {
    
    const products = await Product.findAll();
    console.log(products)

    res.render('products', {products});
});



module.exports = router;