const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

// home routes
// router.use('/', homeRoutes);
// all apiRoutes should start with api
router.use('/api', apiRoutes);


/* This is so if we make a request to  any endpoint that doesn't exist, we'll receive a 404 error 
indicating we have requested an incorrect resource, another RESTful API practice. */
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
