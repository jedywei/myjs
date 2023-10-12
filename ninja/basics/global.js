// Global object
// front-end    window
// back-end     global

// console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);         // why int? because const int = setInterval()
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);
