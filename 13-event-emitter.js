const { log } = require('console')
const EventEmitter = require ('events')

const customEmitter = new EventEmitter()

//on - listen for an event
//emit - emit and event 

customEmitter.on('response', (name, id )=>{
    console.log(`data received user ${name}, with id: ${id}`);
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'john', 34)