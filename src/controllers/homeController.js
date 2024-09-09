const db = require('../db.json');

const getHomePage = (req, res) => {
    const {search, from, to} = req.query;
    let cubes = db.cubes;

    if(search){
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    res.render('index', {cubes, searchedWord: search});
};

const getAboutPage = (req, res) => {
    res.render('about');
};

const errorPage = (req, res) => {
    res.render('404');
}

module.exports= {
    getHomePage,
    getAboutPage,
    errorPage
}