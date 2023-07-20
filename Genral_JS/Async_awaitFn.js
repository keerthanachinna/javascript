




// async always return promise

const { ok } = require("assert");

async function fn(){
    return "hello"
}

console.log(fn());

fu().then((msg)=>{console.log(msg);})

// ----------------------------
const reachA= new promise((resolve,rejects)=>{
    let reached=false;
    if(reached){
setTimeout(resolve,3000,"keerthana reached")
    }else{
        rejects("keerthana not reached")
    }
})

async function asyncstatus(){
    console.log("hi...");
    res=await reachA // await must call inside the async funtion
    console.log(res);
    console.log("end");
}

asyncstatus()

/*****************************************************************/
// if it print reslove method ok

// else reject call mean error will throw

// use try catch block
async function asyncstatus(){
    try{
        console.log("hi...");
        res=await reachA // await must call inside the async funtion
        console.log(res);
        console.log("end");
    }catch(error){
        console.log(error);
    }
   
}

asyncstatus()
