//const mysql = require('mysql')
const {DataTypes, Sequelize} = require('sequelize')
const{ sequlize}= require('../boot/mysql')

const userSchema = {
    id: {type: DataTypes.INTEGER , primaryKey: true , autoIncrement: true} , 
    first_name: {type: DataTypes.STRING}, 
    last_name: {type: DataTypes.STRING}, 
    mobile: {type: DataTypes.STRING} , 
    email: {type: DataTypes.STRING},
    wallet: {type: DataTypes.INTEGER,default: 0},
    
}

const userModel = sequlize.define('User' , userSchema);
userModel.sync().then(() => {
    console.log('*****User table created successfully!*****');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 module.exports = userModel