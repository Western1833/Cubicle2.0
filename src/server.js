const express = require('express');
const handlebars = require('express-handlebars');
const setViewEngine = require('./config/viewEngine.js');

const config = require('./config/environment.js');

const app = express();

setViewEngine(app);

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));