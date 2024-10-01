const Cube = require('../Models/Cube.js');
const db = require('../db.json');

const getCreateCube = (req, res) => {
    res.render('create');
};

const postCreateCube = async (req, res) => {
    const {name, imageUrl, description, difficultyLevel} = req.body;

    let cube = new Cube({name, description, imageUrl, difficultyLevel});
    
    await cube.save();
    
    res.redirect('/');
};

const getCubeDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if(!cubeId) {
       return res.redirect('/404');
    }

    let cube = db.cubes.find(x => x.id === cubeId);

    if(!cube) {
        return res.redirect('/404');
    }

    res.render('details', {cube});
}

module.exports = {
    getCreateCube,
    postCreateCube,
    getCubeDetails
};