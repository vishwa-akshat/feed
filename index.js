const express = require('express');
const userInstagram = require("user-instagram");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// Gets informations about a user


app.get('/', (req, res)=>{
    res.render("home");
})

app.post('/user', async (req, res)=>{
    const response=await userInstagram(req.body.user);
   
    res.render("user",{posts:response.posts})
})

app.listen(3000, ()=>{
    console.log('Server Started at Port 3000');
})