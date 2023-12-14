const express = require('express');
require('dotenv').config()
// exress app
const app=express();

// Respond to request
app.get('/',(req,res)=>{
    res.json({msg:"Hello World"});
})

// listen for request test git

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});