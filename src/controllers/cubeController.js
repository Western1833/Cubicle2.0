const getCreateCube = (req, res) => {
    res.render('create');
}

const postCreateCube = (req, res) => {
    console.log('cube created');
    res.send('createform submitted');
}

module.exports = {
    getCreateCube,
    postCreateCube
};