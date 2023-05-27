const User = require('../models/UserModel')
const userList =(req , res , next)=>{
   
    res.send({
        success: true ,
        message: "List users successfully"
    })
}

const userAdd = async (req, res, next) => {
    try {
      const newUser = await User.create({
        first_name: 'Ali',
        last_name: 'Mohammade',
        mobile: '0894332716',
        email: 'ali@gmail.com'
      });
  
      res.status(200).json({
        success: true,
        message: 'User added successfully!',
        user: newUser
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to add user'
      });
    }
  };

module.exports = {
    userList, 
    userAdd
}