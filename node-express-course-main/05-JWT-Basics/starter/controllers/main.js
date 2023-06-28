//check username, password in post(login) request
//if exist create JWT
//send back to front end
//

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')
const { BadRequestError } = require('../errors')

const login = async(req,res) => {
    const {username, password} = req.body
    
if(!username || !password){
    throw new BadRequestError('please provide email and password')
}

const id = new Date().getDate()

const token =  jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'3d'})
res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req,res) => {
   
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret:`here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}