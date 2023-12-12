const router = require('express').Router();
const sequelize = require('../config/connection');
const {Reviews} = require('../models');



// GET all Pets data
router.get('/',(req,res) => {
  Reviews.findAll({})
  .then(dbUserData => {
    const familyData = dbUserData.map(data => data.get({plain: true}));
    console.log(familyData);
    res.render('clients', {
      familyData
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;