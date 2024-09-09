const Cube = require('../Models/Cube.js');

const getCreateCube = (req, res) => {
    res.render('create');
};

const postCreateCube = (req, res) => {
    const {name, imageUrl, description, difficultyLevel} = req.body;
    let newCube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(newCube);
    res.redirect('/');
};

module.exports = {
    getCreateCube,
    postCreateCube
};