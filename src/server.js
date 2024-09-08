const express = require('express');
const setViewEngine = require('./config/viewEngine.js');
const {getCreateCube} = require('./controllers/cubeController.js');

const config = require('./config/environment.js');

const app = express();

setViewEngine(app);

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/create', getCreateCube);

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));