const Cube = require('../Models/Cube.js');

const getCreateCube = (req, res) => {
    res.render('create');
}

const postCreateCube = (req, res) => {
    let newCube = new Cube(req.body);

    res.redirect('/');
}

module.exports = {
    getCreateCube,
    postCreateCube
};