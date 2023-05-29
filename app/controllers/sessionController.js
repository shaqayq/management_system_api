const createUserTable = require('../models/UserModel')
const db = require('../boot/mysql');
const jwt = require('../services/TokenServices')

exports.newSession =async(req , res, next)=>{
    try {
        
        const {email} = req.body
        const user = await db.connection.query('SELECT id FROM users WHERE email= ?' , email , (err , result)=>{
           if(err){
            return  res.status(500).send({
                status:'Error',
                code: 500 , 
                message: "USER WITH EMAIL FOUND!"
            })
           }
            if(result.length == 0) {
              return  res.status(404).send({
                    status:'Error',
                    code: 404 , 
                    message: "USER NOT FOUND!"
                })
            }
           
            const token = jwt.sign({id:result[0].id})
            res.send({
                success: true, 
                message: "YOU ARE AUTHORIZED",
                token
            })
        })

        

    } catch (error) {
        next()
    }
}