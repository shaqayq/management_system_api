const userModel = require('../models/UserModel')
const userList =(req , res , next)=>{
   
    res.send({
        success: true ,
        message: "List users successfully"
    })
}

const userAdd =(req , res , next) =>{
    userModel.create({
        first_name: 'Ali', 
        last_nam: 'Mohammade',
        mobile: '0894332716' ,
        email: 'ali@gmail.com'
    }).then((()=>{
        console.log(res);
    })).catch((error)=>{
        console.error(error);
    })
}
module.exports = {
    userList, 
    userAdd
}