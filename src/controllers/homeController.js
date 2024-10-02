const Cube = require('../Models/Cube.js');

const getHomePage = async (req, res) => {
    const {search, from, to} = req.query;

    let cubes = await Cube.find().lean();

    if(search){
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= from);
    }

    if(to) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= to);
    }
    
    res.render('index', {cubes, searchedWord: search, from, to});
};

const getAboutPage = (req, res) => {
    res.render('about');
};

const errorPage = (req, res) => {
    res.render('404');
};

module.exports= {
    getHomePage,
    getAboutPage,
    errorPage
}