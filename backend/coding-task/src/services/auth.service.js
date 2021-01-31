const httpStatus = require('http-status');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');

const login = async (name, password) => {
    const user = await userService.getUserByName(name);
    if (!user || !(await user.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect username or password');
    }
    return user;
};

module.exports = {
    login
};
