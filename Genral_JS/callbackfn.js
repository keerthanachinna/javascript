const fs=required('fs');
const axios= required('axios');

console.log
('================================================================================================================================');


function logging(){
    console.log("hlo programmer");
}

setTimeout(logging(),2000)
// ---------------------
setTimeout(()=>{
console.log("hloooo programmer");
},3000)


setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2");
        setTimeout(()=>{
            console.log("3");
        },3000)
    },2000)
},1000)

// sysntax
// function function_name(argument, callback){}

// function function_name(argument, function (error, result){
//      if(error){ console.log(error) }
//     else { console.log(result) } 
// });

//  function function_name(argument, function (callback_argument){
//     // callback body 
//     setTimeout(function () { 
//         console.log('Callback as Standard Function'); 
//     }, 1000);
// })

// function function_name(argument, (callback_argument) => { 
//     // callback body 
// })
// setTimeout(() => { 
//     console.log('Callback as Arrow Function'); 
// }, 1000);
