const express = require('express');
const app = express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("hello from backend")
})

app.listen(port,()=>{
	console.log("serveur fonctionne")
})
