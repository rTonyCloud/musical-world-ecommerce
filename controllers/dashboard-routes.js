const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, User, Product} = require('../models');
const withAuth = require('../utils/auth');

// to get all dashboard data
router.get('/', withAuth, (req, res) => {
    Category.findAll({
      
      attributes: [
        'id',
        'category_name',
        'category_picture',       
      ],
      include: [
        {
          model: Product,
          attributes: ['id', 'picture','product_name', 'price', 'stock', 'category_id'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email_id', 'telephone_no']
          }
        },
        
      ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('dashboard', {posts, loggedIn: true});
      })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// to post one data with id
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'category_name', 
      ],
      include: [
        {
          model: product,
          attributes: ['id', 'picture','product_name', 'price', 'stock', 'category_id', 'add_to_cart_option'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email_id', 'telephone_no']
          }
        },
        {
          model: User,
          attributes: ['id', 'name', 'email_id', 'telephone_no']
        }
      ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
            post,
            loggedIn: true
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/create/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'category_name',
      ],
      include: [
        {
          model: product,
          attributes: ['id', 'picture','product_name', 'price', 'stock', 'category_id', 'add_to_cart_option'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email_id', 'telephone_no']
          }
        },
        {
          model: User,
          attributes: ['id', 'name', 'email_id', 'telephone_no']
        }
      ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('create-post', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;

