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


const posts=[
    {title:"post one",body:"this is post one"},
    {title:"post two",body:"this is post two"}
]

function getposts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML= output;
    },1000)
}

function createpost(post){
    setTimeout(()=>{
        post.push(post);
    },2000)
}
getposts();
createpost({title:"post one",body:"this is post one"})

// output
// post one
// post two

// alternate using call back

function createpost(post,callback){
    setTimeout(()=>{
        post.push(post);
        callback();
    },2000)
}
// getposts(); no need to call 
createpost({title:"post three",body:"this is post three"},getposts)

// output
// post one
// post two
// post three


// alternate using promise