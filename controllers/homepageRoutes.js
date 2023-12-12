const router = require('express').Router();
const sequelize = require('../config/connection');
const {Pets} = require('../models');



// GET all Pets data
router.get('/',(req,res) => {
  Pets.findAll({})
  .then(dbUserData => {
    const familyData = dbUserData.map(data => data.get({plain: true}));
    console.log(familyData);
    res.render('homepage', {
      familyData
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
