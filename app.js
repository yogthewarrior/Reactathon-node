// var x=;
// (function (exports, require, module, __filename, __dirname) { var x=; BASIC ERROR/PARAMETERS
const dash = require('appmetrics-dash');
dash.attach();
const express = require("express");
const config = require("config");
const app = express();
const routes = require("./Routes/routes")
const db = require("./model/db"); // init DB
app.use(express.json());
const ghUser = require('gh-user');
const async = require('async')
const router = app.use('/', routes);

app.listen(2000, function () {
    console.log("App is lisening in port 2000 " + config.odbConfig.port)
})


router.get("/", (req, res) => {
    res.send("Welcome, Navigate to")
})

/* async function fireAPI() {
   // ghUser('yogthewarrior').then(user => {
   //     console.log(user.id, ' --  ', user.login)
   // });

   const response = await ghUser('yogthewarrior')
   console.log(response.id)
   const response2 = await ghUser('yogthewarrior')
   console.log(response2.name)
   let res = { id: response.id, name: response2.name }
   // console.log("FINAL ", res)
   return true
}
let temp = fireAPI();
console.log('temp', temp);
*/

// function firingAPIwithAsync() {
    async.parallel({
        one: function (callback) {
            ghUser('yogthewarrior').then( user => {
                callback(null, user.id);
            })
        },
        two: function (callback) {
            ghUser('yogthewarrior').then( user => {
                callback(null, user.name);
            })
        }
    }, function (err, results) {
        // results is now equals to: {one: 1, two: 2}
        console.log(results)
    });
// }
// console.log(`---${__dirname}`) // Global info
// console.log(__filename) // Global info