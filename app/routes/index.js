const userRouter = require('./users')
const auth = require('../middlewares/auth')
const sessionsRouter = require('../routes/sessions')
module.exports=(app)=>{
    app.use('/api/v1/users',userRouter),
    app.use('/api/v1/session',sessionsRouter)
}