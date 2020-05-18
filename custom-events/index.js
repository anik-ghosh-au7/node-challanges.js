const events = require('events');

const eventEmitter = new events.EventEmitter();

// properties
    // addEventListener
    // on
    // removeEventListener
    // emit

// Listener 1
const listener1 = () => {
    console.log('listener1 is executed');
};

// Listener 2
const listener2 = () => {
    console.log('listener2 is executed');
};

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listener listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 is not listening');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listener listening to connection event');

console.log('this is the end');