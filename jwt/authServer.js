
// console.log("hi");
require('dotenv').config()
const { json } = require('express');
const express = require('express');
const app = express();

const jwt=require('jsonwebtoken');

app.use(express.json())


const posts = [
    { username: 'Kyle', title: "post1" },
    { username: 'bob', title: "post2" }
]

app.post('/login', (req, res) => {
   //authentication
   const username=req.body.username;
    const user={user:username}
  const accessToken=  jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken: accessToken})
})

// use this function for posts endpoint middleware
// set header
function authenticationToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1]
// Bearer TOKEN
    if(token=null) return res.sendStatus(403);
    jwt.verify(toke,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next();
    })
}

app.listen(4004);
