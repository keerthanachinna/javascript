// callback chain over come using  promise


/**
 * blocking non blocking
 * synchrous vs asynchrous
 * 
 */

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

   return new promise((resolve,reject)=>{
    setTimeout(()=>{
        post.push(post);
        const error=false;
        if(!error){
            resolve()
        }else{
            reject('Error: Something went wrong')
        }
    },2000)
    })
  
}

createpost({title:"post three",body:"this is post three"}).then(getposts).catch((err)=>{console.log(err)})

// output
// post one
// post two
// post three

//promise all
const promise1=promise.reslove('Hello world');
const promise2= 10;
const promise3= new promise((reslove,reject)=>{setTimeout(reslove,3000,'bye')})
const promise4= fetch('https:jsonplaceholder.typecode.com/users').then(res=>res.json)// from jsonplaceholdertypecode.com
promise.all([promise1,promise2,promise3]).then(values=>{console.log(values);})

// output
// ['Hello world',10,'bye']

// const promise4= fetch('')// from jsonplaceholdertypecode.com

// output
// ['Hello world',10,'bye',[{}{}..10 array value]]

