const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

const createUser = async (userBody) => {
    if (await User.isUserTaken(userBody.username)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Username already taken');
    }
    const user = await User.create(userBody);
    return user;
};


const getUserByName = async (username) => {
    return User.findOne({ username });
};

module.exports = {
    createUser,
    getUserByName
};
