const mysql = require('mysql');
const db = require('../boot/mysql');


const userModel = () => {
 const userTable = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      mobile VARCHAR(20) NOT NULL,
      email VARCHAR(255) NOT NULL
   ) `;

   db.connection.query(userTable , (err)=> {
    if (err){
      console.log("Couldnot Create User Table...");
    }else {
      console.log("User Table Cretae SUccessfully");
    }
   })
}



 module.exports = userModel