const express = require('express');

// routes files will work as controler
const routes = require('./controllers');

// import sequelize connection
const sequelize = require('./config/connection');

// to get the path to stylesheet
const path = require('path');

// import helpers
const helpers = require('./utils/helpers');

// Setting up express-handlebars tamplet engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

// import express session
const session = require('express-session');
// declaring app to use express and the local host


const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'myfavouritedog',
    cookie: {
        expires: 10 * 60 * 1000  //  this will setup the session automatically expire after 10 minutes
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Setting up handlebars as default tamplet engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
    defaultLayout : 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });

  // Landing Page
  app.get('/', (req, res) =>{
      res.render("main");
  })
// For Cart
  app.get('/cart', (req, res) =>{
    res.render("cart", {title: 'Your Items in the Cart'});
})

// For dashboard
app.get('/dashboard', (req, res) =>{
    res.render("dashboard", {title: 'Dashboard'});
})

// For Homepage
app.get('/homepage', (req, res) =>{
    res.render("homepage", {title: 'Homepage'});
})

// For login
app.get('/login', (req, res) =>{
    res.render("login", {title: 'Login'});
})

// For logout
app.get('/logout', (req, res) =>{
    res.render("logout", {title: 'Logout'});
})

// For signup
app.get('/signup', (req, res) =>{
    res.render("signup", {title: 'Signup'});
})

// For notfound
app.get('*', (req, res) =>{
    res.render("notfound", {message: 'Sorry, page Not found!'});
})


