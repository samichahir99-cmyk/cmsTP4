const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB=require('./config/db');

const PORT= process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hello from backend")
})

connectDB()

app.listen(PORT,()=>{
	console.log("serveur fonctionne")
    connectDB()
})
