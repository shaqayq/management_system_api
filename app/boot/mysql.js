const mysql= require('mysql')

const {MYSQL_HOST , MYSQL_DB , MYSQL_USERNAME , MYSQL_PORT} = process.env

const connection = mysql.createConnection({
    host: MYSQL_HOST ,
    user: MYSQL_USERNAME ,
    port: MYSQL_PORT , 
    database: MYSQL_DB
});

const startMysql = () =>{

    connection.connect(err => {
        if(err) {
            console.log("connection faild " , err.message);
            return;
        }
    
        console.log("Connect successfully....");
    })

    connection.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}` , (err) => {
        if(err) {
            console.log('DATABASE Couldnot create...');
        }else {
            console.log("DATABSE CREATES SUCCESSFULLY..");
        }
    });
}

module.exports ={ startMysql , connection}