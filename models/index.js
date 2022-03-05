'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname+'/../config/config.json')[env];
const logger = require('./../logger');
const { Umzug, SequelizeStorage } = require('umzug');

let db = {};
let sequelize ;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// this module use to migrate the DB
const umzug = new Umzug({
    migrations: {glob: 'migrations/*.js'},
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({sequelize}),
    logger: console
})

sequelize.authenticate()
    .then(()=>{
        logger.info('Connection has been established successfully...');
    })
    .catch(err=>{
        logger.error('Unable to authenticate the database: ', err);
    })

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file != basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    })

// declare models
// db['users'] = require('./User')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName=>{
    if(db[modelName].associate) {
        db[modelName].associate(db);
        db[modelName]['logger'] = function(log) {
            logger.log('info', "Query:: "+log);
        }
    }
})

// creating tables
// sequelize.sync()

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.umzug = umzug;

module.exports = db;

