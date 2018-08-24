const express = require('express');
const router = express.Router();
const taskcontroller = require('../Controllers/TasksController');
const GitHubUsers = require('../Controllers/GitHubUsers');
const bodyParser = require('body-parser')

/**
 * Get a list of tasks
 *
 * @section Tasks
 * @type get
 * @url /gettasks
 */
router.get('/gettasks/', function (req, res, next) {
        taskcontroller.getTasks(req, res, next);
});

/**
 * Save the tasks
 *
 * @section Tasks
 * @type post
 * @url /savetask
 * @param {string} name 
 */
router.post('/savetask', function (req, res, next) {
        taskcontroller.saveTask(req, res, next);
});


/**
 * Update the tasks
 *
 * @section Tasks
 * @type put
 * @url /savetask
 * @sample {id:1,name:name}
 * @param {string} name 
 * @param {integer=} id 
 */
router.put('/updatetask', function (req, res, next) {
        taskcontroller.updateTask(req, res, next);
});


/**
 * Save the tasks
 *
 * @section Tasks
 * @type post
 * @url /saveUser
 * @param {string} name 
 */
router.post('/saveuser', function (req, res, next) {
        GitHubUsers.save(req, res, next);
});


/**
 * Get Git Hub User list
 *
 * @section Users
 * @type get
 * @url /getusers
 */
router.get('/getusers', function (req, res, next) {
        GitHubUsers.getUsers(req, res, next);
});


module.exports = router;