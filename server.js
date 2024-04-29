const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user  = require("./routes/User");


var cors = require('cors')
require('dotenv').config()  

const app  = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

// parse application/json
app.use(bodyParser.json())

app.use('/api/user',user);

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send("Welcome to swift Backend");
})

app.get('/callback',(req,res)=>{
  res.send("hello callback"); 
})

app.listen(PORT,async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected")
        
      } catch (error) {
        console.error(error);
      }
    console.log("server running on ", PORT)
})
module.exports = app;