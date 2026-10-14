const express = require('express');
const app = express();

const connectDB=require('./config/db');

const dotenv = require('dotenv');
dotenv.config();
const PORT= process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hello from backend")
})

connectDB()

app.listen(PORT,()=>{
	console.log("serveur fonctionne")
    connectDB()
})
