require('dotenv').config({
  path: 'variables.env'
});

const Sequelize = require("sequelize");
const db = new Sequelize(process.env.TABLE, process.env.USER, process.env.PASSWORD, {
  host: process.env.MYHOST,
  dialect: 'mysql',
});


db.authenticate()
  .then(() => { 
    console.log('DB Conectada');
  })
  .catch(err => {
    console.log('Error en la conexión con DB')
  })

exports.default = db;

