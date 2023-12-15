const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Reviews } = require('../../models');

// get all reviews
router.get('/', (req, res) => {
  console.log('======================');
  Reviews.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// post a new review
router.post('/', (req, res) => {
  Reviews.create({
    name: req.body.name,
    my_comment: req.body.my_comment,
    stars_num: req.body.stars_num
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
  Reviews.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbReviewData => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'No review exists with that ID, try again.' });
        return;
      }
      res.json('Review is been deleted')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;