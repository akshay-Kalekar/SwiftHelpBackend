const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user  = require("./routes/User");
const authRoute  = require("./routes/authroute");
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '3QeSotK0fDGAjI3Sux3aYuisD0klpjGV',
  issuerBaseURL: 'https://dev-56eofp2t8ujgwtap.us.auth0.com'
};


var cors = require('cors')
require('dotenv').config()  

const app  = express();
app.use(auth(config));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

// parse application/json
app.use(bodyParser.json())

app.use('/api/user',user);
app.use('/api/',authRoute);

app.use(express.json());
const PORT = process.env.PORT || 3000;

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