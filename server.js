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
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });


