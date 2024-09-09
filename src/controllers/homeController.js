const db = require('../db.json');

const getHomePage = (req, res) => {
    res.render('index', {cubes: db.cubes});
};

const getAboutPage = (req, res) => {
    res.render('about');
};

module.exports= {
    getHomePage,
    getAboutPage
}