const {getCreateCube, postCreateCube} = require('./controllers/cubeController.js');
const {getAboutPage, getHomePage} = require('./controllers/homeController.js');
const router = require('express').Router();

router.get('/', getHomePage);

router.get('/about', getAboutPage);

router.get('/create', getCreateCube);

router.post('/create', postCreateCube);

module.exports = router;