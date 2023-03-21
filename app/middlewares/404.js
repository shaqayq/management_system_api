module.exports =(app)=>{
    app.use((req, res , next)=>{
        res.status(404).send({
            code: "Route not found",
            message: "Select valid route"
        })
    })
}