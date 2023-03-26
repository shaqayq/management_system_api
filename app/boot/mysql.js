const mysql= require('mysql')
const {DataTypes, Sequelize} = require('sequelize')

const {MYSQL_HOST , MYSQL_DB , MYSQL_USERNAME} = process.env

const sequlize = new Sequelize(MYSQL_DB , 'root' , '' ,{
    host: MYSQL_HOST ,
    dialect: 'mysql'
})

const startMysql = () =>{

sequlize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

}

module.exports ={ startMysql , sequlize }