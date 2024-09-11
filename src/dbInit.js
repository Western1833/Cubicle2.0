const mongoose = require('mongoose');
const dbUrl = require('./config/environment.js');

async function dbInit() {
    await mongoose.connect(dbUrl.DB_URL);

    console.log('DB connected.');
}

module.exports = dbInit;