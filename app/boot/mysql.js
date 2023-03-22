const mysql= require('mysql')

const {MYSQL_HOST , MYSQL_DB} = process.env

const connection = mysql.createConnection({
    host: MYSQL_HOST, 
    database: MYSQL_DB , 
    user: 'root'
});

const startMysql = () =>{
connection.connect(function(err){
    if(err){
        console.log('Error connecting' + err.stack);
    }

    console.log('Connect Successfully');
})}

module.exports = startMysql