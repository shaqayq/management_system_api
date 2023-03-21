module.exports=(app)=>{
    app.use((error, req , res , next)=> {
        const status = error.status || 500

        res.send({
            code: "Expection",
            status,
            message: error.message
        })
    })
}