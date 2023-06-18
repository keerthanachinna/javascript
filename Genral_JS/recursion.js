//  without loop print the array value numbers plus string

let array=["x","y","z",4,5];
function print(arr,pos,len){
    if( pos < len){ 
        console.log(arr[pos]);
         print(arr,pos+1,len);
    } 
        return;
}
     print(array,0 ,array.length);

//  without loop print the array value numbers
     let a=[1,10,4,3,5];
     let b = 0;
     function printarray(arrayValue){
        if(b < arrayValue.length){
            console.log(a[b]);
            b++;
            printarray(arrayValue);
        }
     }
     printarray(a)
    //  Recursion is a process of calling itself.
    //   A function that calls itself is called a recursive function. 
    //   The syntax for recursive function is: 
    //   function recurse() { 
    //     // function code recurse(); 
    //     // function code }
    //      recurse();
    //       Here, the recurse() function is a recursive function.

//     Is recursion allowed in JavaScript?
// Image result for recursion javascript
// Modern programming languages like JavaScript already have the 
//(important line  )--->"for and while statements as alternatives to recursive functions."
//  But some languages like Clojure do not have any looping statements, 
//  so you need to use recursion to repeatedly execute a piece of code

// What is recursion in JavaScript w3schools?
// Recursion is the technique of making a function call itself. 
// This technique provides 
// a way to break complicated problems down into simple problems which are easier to solve. 
// Recursion may be a bit difficult to understand.
//  The best way to figure out how it works is to experiment with it.

// How to sort an array of integers correctly
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort -> link with sysntax meaning
// number revesre
// let a=[1,10,4,3,5];
 a.reverse();
 // other Way
//  let a=[1,10,4,3,5];
// ascending
 var numArray = [140000, 104, 99];
 numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);

 // other Way
let productPrices = [10.33, 2.55, 1.06, 5.77];
console.log(productPrices.sort((a,b)=>a-b));
// descenting
var bc = [140000, 104, 99,90000,7000,67675];
bc.sort(function(a, b) { console.log("a",a); console.log("b",b)
  return -a+b;
});

console.log(bc);

// array of Object
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  



// string reverse
// 

// Interceptor in Angular
// The angular interceptor is a medium connecting the backend and front-end applications. 
// Whenever a request is made, the interceptors handle it in between. 
// They can also identify the response by performing Rxjs operators. 
// The interceptors do not initiate the handle method and handle the requests at their level