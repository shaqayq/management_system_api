
const db = require('../boot/mysql');
const createUserTable = require('../models/UserModel')
const userList =(req , res , next)=>{
   
  const userData=db.connection.query(`SELECT * FROM users` , (error,result , field) => {
    if(error) throw error;

    res.send({
     
     usersList: result
       })
  });
   
}

const userAdd = (req, res, next) => {
  createUserTable();
  const {first_name , last_name , email , mobile} = req.body

  const UserData = {
    first_name,
    last_name,
    email,
    mobile
    
  };

  db.connection.query('INSERT INTO users SET ?', UserData, (err, result) => {
    if (err) {
     console.log(err);
      res.status(500).send({
        success: false,
        message: 'Failed to add user'
      });
    } else {
      // console.log("User added successfully!");
      res.status(201).send({
        success: true,
        message: 'User added successfully!'
      });
    }
  });
};

module.exports = {
    userList, 
    userAdd
}