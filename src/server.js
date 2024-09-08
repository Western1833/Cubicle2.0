const express = require('express');
const setViewEngine = require('./config/viewEngine.js');
const routes = require('./routes.js');

const config = require('./config/environment.js');

const app = express();

setViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`));