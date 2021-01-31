var config = require('./config');
const { User } = require('../models');
const { userService } = require('../services');
module.exports = function () {
    return new Promise(function (resolve) {
        User.findOne({ email: config.adminAccountEmail }, function (err, user) {
            if (err) throw err;
            if (!user) {

                userService.createUser({
                    username: config.adminAccountUsername,
                    password: config.adminAccountPassword,
                }).then(() => {
                    resolve();
                })
            } else {
                resolve();
            }
        })
    })
};