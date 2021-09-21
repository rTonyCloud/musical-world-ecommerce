const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    Post.findAll({
    attributes: [
        'id',
        'category_name',       
        ],
        include: [
        {
            model: product,
            attributes: ['id', 'picture','product_name', 'price', 'category_id', 'add_to_cart_option'],
            include: {
            model: User,
            attributes: ['username', 'twitter', 'github']
            }
        },
        {
            model: User,
            attributes: ['username', 'name', 'email_id',]
        }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/post/:id', (req, res) => {
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
          attributes: ['id', 'picture','product_name', 'price', 'category_id', 'add_to_cart_option'],
          include: {
            model: User,
            attributes: ['username', 'twitter', 'github']
          }
        },
        {
          model: User,
          attributes: ['username', 'name', 'email_id',]
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
  
        // pass data to template
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
          });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;