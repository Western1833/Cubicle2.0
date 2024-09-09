const {getCreateCube, postCreateCube, getCubeDetails} = require('./controllers/cubeController.js');
const {getAboutPage, getHomePage} = require('./controllers/homeController.js');
const router = require('express').Router();

router.get('/', getHomePage);

router.get('/about', getAboutPage);

router.get('/create', getCreateCube);

router.post('/create', postCreateCube);

router.get('/details/:cubeId', getCubeDetails);

module.exports = router;