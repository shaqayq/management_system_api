const mysql = require('mysql')

const userSchema = {
    id: {type: Number , primaryKey: true} , 
    fisrt_name: String , 
    last_name: String, 
    mobile: String , 
    email: String,
    wallet: {type: Number,default: 0},
    createdAt:{type:Date , default: Date.now()},
    updatedAt: { type:Date, default: Date.now()}
}

const userModel = mysql.model('User' , userSchema)
 module.exports = userModel