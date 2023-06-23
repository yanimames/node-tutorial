const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

const peopleRoute = require('./routes/people')
const loginRouter = require('./routes/auth')

//taic assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false }))
//parse json
app.use(express.json())

app.use('/api/people', peopleRoute)

app.use('/login', loginRouter)


app.listen(5000, () => {
    console.log('server is listening on port 5000.....');
})