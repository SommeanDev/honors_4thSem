import 'dotenv/config';

console.log(process.env.USERNAME);
console.log(process.env.PORT);

//callbacks
/*
called function executes in the same loop or thread
but the call may become asynchronous
*/
const callback_function = (code) => {
    console.log('Process exited with code:', code);
};

process.on('exit', callback_function)

console.log('app started');

// macro, micro and tick tasks
// call/execution order of tasks: micro -> tick -> macro

//tick
process.nextTick((data) => {
    console.log('This is the data: ', data);
}, 'data01');

//micro
queueMicrotask(() => {
    console.log('microtask called 1');
});

process.nextTick((data) => {
    console.log('This is the data: ', data);
}, 'data02');

queueMicrotask(() => {
    console.log('microtask called 2');
});

//macro
setTimeout(() => {
    console.log('setTimeout callback called');
}, 1000);

//promise api
const promise1 = Promise.resolve('data03');
promise1
    .then((data) => {
        console.log('microtask with', data);
    })
    .catch((error) => {
        console.log('microtask with', data);
    });

const promise2 = Promise