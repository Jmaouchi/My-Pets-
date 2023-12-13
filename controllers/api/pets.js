const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pets } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Pets.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// post a new review
router.post('/', (req, res) => {
  Pets.create({
    name: req.body.name,
    my_comment: req.body.my_comment
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;