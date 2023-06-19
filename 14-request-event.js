const httpm = require('http')

// const server = hhtp.createServer((req, res) => {
    //res.end('welcome')
//})

//using event emitter API
const server = hhtp.creatServer()
//emits request event
//subscribre to it / listen fo it / repsont to it

server.on('request', (req, res) => {
    res.end ('welcome')
})

server.listen(5000)