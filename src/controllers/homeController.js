const db = require('../db.json');

const getHomePage = (req, res) => {
    res.render('index', {cubes: db.cubes});
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