
// using nodejs modulez http server
/*
const http=require('http');

const port=process.env.PORT || 3000;
const server =http.createServer((req,res)=>{
    const fs=require('fs');
    res.setHeader('content-type','text/html');
    if(req.url =='/'){
        res.statusCode=200;
        res.end('<h1> hello world</h1>');
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>About</h1>');
    }
    else if(req.url=='/hello'){
        // to open html file
const data=fs.readFileSync('temp.html');
res.end(data.toString());
    }
    else{
     //   res.harry(); // server will crash
        //and other headers will not work

        res.statusCode=404;
        res.end('<h1>Not Found</h1>');
    }
    
})
server.listen(port,()=>{
    console.log('hello');
})

*/
//using express
const fs=require('fs');
const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: true })); 
const port=3000
app.get('/',(req,res)=>{
    console.log(req.url);
const data=fs.readFileSync('./input.html');
    res.send(data.toString());
})
//for get
app.get('/example',(req,res)=>{
    res.send(`Full name is:${req.query.fname} ${req.query.lname}.`);
})
app.get('/hello/:name',(req,res)=>{
    res.send(`Full name is:${req.params.name}.`);
})
//for post
app.post('/example',(req,res)=>{
    res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
})

app.listen(port,()=>{
    console.log('hello');
});