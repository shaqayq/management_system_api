const userList =(req , res , next)=>{
    res.send({
        success: true ,
        message: "List users successfully"
    })
}

module.exports = {
    userList
}