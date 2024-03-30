const EventEmitter = require('events')
const EventEmitter = new EventEmitter

EventEmitter.on('start', () => {
    console.log('Durante')
})

console.log('Antes')

EventEmitter.EventEmitter('start')

console.log('Depois')