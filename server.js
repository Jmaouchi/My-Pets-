const express = require('express');
const sequelize = require('./config/connection');
// const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3002;

// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this will help us access files from other files, like css and js from html
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes, and make sure that this is always after the creation of your session. if you declare this befor the declaration of your session, it wont work 
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});