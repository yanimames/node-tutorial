const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const testUser = require('../middleware/testUser')


const rateLimiter = require('express-rate-limit')

const apiLimiter = rateLimiter  ({
    windowMs: 15*60*1000,
    max: 1,
    message: {
        msg: ' to many requests from IP, please try again in 15 minutes'
    },
})

const { register, login, updateUser } = require('../controllers/auth')
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
