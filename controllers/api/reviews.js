const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Reviews } = require('../../models');
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');


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


// Multer middleware for parsing multipart/form-data
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
   cb(null, './public/images/'); // Save images to the './images' directory
  },
   filename: function (req, file, cb) {
    const extension = file.originalname.split('.').pop(); // Get the file extension
    const filename = `${uuidv4()}.${extension}`; // Generate a UUID for the filename
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });
// post a new review
router.post('/', upload.single('image'), (req, res) => { 
  Reviews.create({
    name: req.body.name,
    my_comment: req.body.my_comment,
    stars_num: req.body.stars_num,
    image: req.file.filename
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      // how can i remove the filename that is added to the server id there is any issues
      res.status(500).json(err);
    });
  console.log("=========Req.body========");
  console.log(JSON.stringify(req.body,null,2));
  console.log(JSON.stringify(req.files,null,2));
  console.log("========================");
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