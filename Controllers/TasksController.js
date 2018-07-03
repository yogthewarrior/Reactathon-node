const Joi = require('joi');
let tasks = [{ name: "desc", id: 1 }]

module.exports = {
    getTasks: function (req, res, next) {
        res.status(200).send(tasks)
    },
    saveTask: function (req, res, next) {
        const schema = {
            name: Joi.string().min(3).required()
        }
        const {error} = Joi.validate(req.body, schema) // object distruction syntax
        if (error) {
            res.status(400).send(error.details[0].message)
        } else {
            tasks.push({ name: req.body.name, id: tasks.length + 1 })
            res.status(200).send("Saved Successfuly")
        }
    },
    updateTask: function (req, res, next) {
        const schema = {
            name: Joi.string().min(3).required(),
            id: Joi.number().integer().min(1).required()
        }
        const validateRes = Joi.validate(req.body, schema)
        if (validateRes.error) {
            res.status(400).send(validateRes.error.details[0].message)
        } else {
            tasks.find(function (task) {
                if (task.id == req.body.id) task.name = req.body.name
            });
            res.status(200).send(tasks)
        }
    }
}
