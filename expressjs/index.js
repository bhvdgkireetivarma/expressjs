const exp = require('constants');
var express= require('express');
var path=require('path');
var app=new express();
var port=3000;
var middleware=(req,res,next)=>{
    console.log(req.url);
    next();// other middlewares will also be executed
    // if we do not use it will only execute one middleware
}

//if we want to serve folder using express we use below code
// app.use acts as middleware 
// it will access of request and response objects and can change them

app.use(express.static(path.join(__dirname,"public")));
app.use(middleware);
//localhost:3000/ we will get this ^
app.get('/print/:name',(req,res)=>{
    res.send(req.params.name);
})
app.get('/hello',(req,res)=>{
//res.send('hello world');
    // to send file

    //__dirname is already present as arguement in nodejs
 //   res.sendFile(path.join(__dirname,'index.html'));
 res.json({
     name:"kireeti",
     class:10
 });
})

app.listen(port,()=>{
    console.log('hello');



})