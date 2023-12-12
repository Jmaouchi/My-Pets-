const router = require('express').Router();
const petsRoutes = require('./pets');
const reviewsRoutes = require('./reviews')


router.use('/pets', petsRoutes);
router.use('/reviews', reviewsRoutes);


module.exports = router;