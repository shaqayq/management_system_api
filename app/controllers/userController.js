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
  const UserData = {
    first_name: 'Ali',
    last_name: 'Mohammade',
    mobile: '0894332716',
    email: 'ali@gmail.com'
  };

  db.connection.query('INSERT INTO users SET ?', UserData, (err, result) => {
    if (err) {
      console.log("Could not add user:", err);
      res.status(500).json({
        success: false,
        message: 'Failed to add user'
      });
    } else {
      console.log("User added successfully!");
      res.status(200).json({
        success: true,
        message: 'User added successfully!'
      });
    }
  });
};

module.exports = {
  userAdd
};


module.exports = {
    userList, 
    userAdd
}