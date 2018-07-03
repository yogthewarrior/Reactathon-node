// var x=;
// (function (exports, require, module, __filename, __dirname) { var x=; BASIC ERROR/PARAMETERS
const dash = require('appmetrics-dash');
dash.attach();
const express = require("express");
const config = require("config");
const app = express();
const routes = require("./Routes/routes")
const bodyParser = require('body-parser')

app.use(express.json());

let tasks = [{ name : "desc", id : 1}]

const router = app.use('/my',routes);
app.listen(2000, function (){
    console.log("App is lisening in port 2000 " + config.odbConfig.port )
})


router.get("/", (req,res) => {
    res.send("Welcome, Navigate to /my")
})


// console.log(`---${__dirname}`) // Global info
// console.log(__filename) // Global info