const tokenService = require('../services/TokenServices')
module.exports = (req, res, next) => {
    if (!('authorization' in req.headers)) {
      return res.status(401).send({
        status: 'Error',
        code: 401,
        message: "You Are Not Authorized!!"
      });
    }
  
    const token = tokenService.verify(req.headers.authorization);
  
    if (!token) {
      return res.status(401).send({
        status: 'error',
        code: 401,
        message: "You Are Not Valid!!"
      });
    }
  
    
    next();
  };