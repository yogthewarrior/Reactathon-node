const Joi = require('joi');
const ghUser = require('gh-user');
const users = require("../model/users")
const async = require('async')

module.exports = {
     save: function (req, res, next) {
        const schema = {
            name: Joi.string().required()
        }
        const { error } = Joi.validate(req.body, schema) // object distruction syntax
        if (error) {
            res.status(400).send(error.details[0].message)
        } else {
            users.find({ login: req.body.name }, function (err, user) {
                if (user.length > 0) {
                    let obj = { isFromGitHub: false, user: user }
                    res.status(200).send(obj)
                } else {
                    // ghUser(req.body.name).then(user => {
                    //     var userData = new users(user);
                    //     userData.save()
                    //     let obj = { isFromGitHub: true, user: user }
                    //     res.status(200).send(obj)
                    // });

                    // ghUser(req.body.name).then(user => {
                    //    let res1 = user.id
                    //    ghUser(req.body.name).then(user => {
                    //     let res2 = {id : res1 , name : user.name}
                    //     console.log('res2',res2)
                    //     res.status(200).send(res2)
                    //    });
                    // });

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
                        res.status(200).send(results)
                    });


                    // const response = await ghUser('yogthewarrior')
                    // console.log(response.id)
                    // const response2 = await ghUser('yogthewarrior')
                    // console.log(response2.name)
                    // let res = { id: response.id, name: response2.name }
                    // res.status(200).send(res)
                }
            })
        }
    },
    getUsers: function (req, res, next) {
        users.find(function (err, users) {
            res.status(200).send(users)
        });
    }
}
