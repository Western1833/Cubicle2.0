const {getCreateCube} = require('./controllers/cubeController.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', getCreateCube);

module.exports = router;