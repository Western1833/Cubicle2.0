const config = {
    production: {
        PORT: 3000,
        DB_URL: 'mongodb://127.0.0.1:27017/cubesProject'
    },
    development: {
        PORT: 5000,
        DB_URL: 'mongodb://127.0.0.1:27017/cubesProject'
    }
};

module.exports = config[process.env.node_env || 'development']