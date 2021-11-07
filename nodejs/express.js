const fs=require('fs');
const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: true })); 
const port=3000
app.get('/',(req,res)=>{
    console.log(req.url);
const data=fs.readFileSync('./input.html');
   // res.send(data.toString());
// send  html file
  res.sendFile(path.join(__dirname,'input.html'));
   //to send json
   res.json({
        "harry":34 
    })
    
})

app.listen(port,()=>{
console.log('hello');
});