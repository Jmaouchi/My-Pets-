const express = require('express');
// const sequelize = require('./config/connection');
const path = require('path');
// const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3002;

// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this will help us access files from other files, like css and js from html
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Now listening on port ' + PORT));
