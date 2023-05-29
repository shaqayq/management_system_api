const userRouter = require('./users')
const auth = require('../middlewares/auth')
module.exports=(app)=>{
    app.use('/api/v1/users',[auth],userRouter)
}