const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/')


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]
    console.log(authHeader)
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const {id, username} = decoded
        req.user = {id, username}

    } catch(error) {
        throw new UnauthenticatedError('Not Authorized to acess this route')   
    }
    next()
}

module.exports = authenticationMiddleware