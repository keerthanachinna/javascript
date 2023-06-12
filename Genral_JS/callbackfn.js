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

