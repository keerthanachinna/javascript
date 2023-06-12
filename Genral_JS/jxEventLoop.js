// stack
// queue
// miro queue

// Node js
// Event loop 
// Set time out vs set time over
// Process nect time vs setimeout
// Not framework
// Single thread
// It take handle multiple thread working event loop 


// 3.What is event loop?
// What is Event loop in Node.js work? And How does it work?
// The Event loop handles all async callbacks. Node.js (or JavaScript) is a single-threaded, event-driven language. This means that we can attach listeners to events, and when a said event fires, the listener executes the callback we provided.
// Whenever we are call setTimeout, http.get and fs.readFile, Node.js runs this operations and further continue to run other code without waiting for the output. When the operation is finished, it receives the output and runs our callback function.
// So all the callback functions are queued in an loop, and will run one-by-one when the response has been received.


// important concept to understand:
// call stack
// Task queueMicrotask(call-back Quenue)
// Micro Task Queue

// call stack
// mechanism to keep track of the funtions currently running and what functions are called by this function.

// before knw what is stack
// stack is like a data structure
// how to handle data
// exapmle
// can of balled put one by one
// take off all 
// 1st in last out
// make js engine readable
// function call track


function a(){
console.log("logging");
}
a();
// stack -> a()
// -------------------------------------
function b(){
    console.log("logging");
    }
   
    function a(){
        console.log("logging");
        b();
        }
        a();

// stack -> a() b();
// -----------------------------------------------

// queue
// type of data structure
// example theater ticket counter

// call back deley function
// task queue(call back)
// a queue that us waiting to be run once the call stack is empty

// js coding excution run line by line

function a(){
 
   console.log("logging");
   setTimeout(()=>{
    console.log("logged after 5 second"); 

   },5000)
   console.log("a function end"); 
}
a();
// stack ->a()
// queue-> setTimeout()
// after a function excute take queue function the excute
// stack ->setTimeout()
// queue-> 
// stack ->
// queue->
// -------------------------------------------

// event handler
// setInterval()
// setTimeout()

// micro task queue 
// api call hold on this queue not event handler
/*  a queue that is waiting to be run after a promise returned a value .(priority is  higher that task queue).work promise


*/
function a(){
    fetch('http://test.com').then(x=>console.log("response return",x))
}
a();

/**
 * stack -->
 * queue -->
 * micro queue ->
 */
/**
 * Event loop
 * single threaded infinite loop which is running task based on call stack avaibaility and task queue.
 * event loop check micro queue and queue and push to stack
 * 1st priority micro queue take function excute 1st to stack
 * even event loop check the queue have value 
 * queue function are setime out set time intevel
 * micro queue have 3rd party api call hold that
 */