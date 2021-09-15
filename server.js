const express = require('express');
const routes = require('.')
const sequelize = require('./config/connection')
require('dotenv').config();

const app = express();
const PORT = proces.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// turn on routes
app.use(routes);




// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  