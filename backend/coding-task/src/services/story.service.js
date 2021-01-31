const httpStatus = require('http-status')
const { Story } = require('../models');
const ApiError = require('../utils/ApiError')
var mongoose = require('mongoose');

const createStory = async (body) => {
    const story = await Story.create(body);
    return story
}

const getStories = async () => {
    const story = await Story.find({});
    return story
}

const getStoryById = async (id) => {
    return Story.findById(id);
};

const deleteStoryById = async (id) => {
    const story = await getStoryById(id);
    if (!story) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Story not found');
    }
    await story.remove();
    return story;
}

const storyLiker = async (userId, id) => {
    const story = await getStoryById(id);
    if (!story) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Story not found');
    }

    const dislikers = await Story.find({ "dislikers": userId })
    const likers = await Story.find({ "likers": userId })

    if (dislikers.length === 0) {
        if (likers.length === 0) {
            story.likers.push(userId)
        } else {
            story.likers.pull(userId)
        }
    } else {
        story.dislikers.pull(userId)
        story.likers.push(userId)
    }

    await story.save()

    return story;
}

const storyDisliker = async (userId, id) => {
    const story = await getStoryById(id);
    if (!story) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Story not found');
    }

    const dislikers = await Story.find({ "dislikers": userId })
    const likers = await Story.find({ "likers": userId })

    if (likers.length === 0) {
        if (dislikers.length === 0) {
            story.dislikers.push(userId)
        } else {
            story.dislikers.pull(userId)
        }

    } else {
        story.likers.pull(userId)
        story.dislikers.push(userId)
    }

    await story.save()

    return story;
}


module.exports = {
    createStory,
    getStories,
    getStoryById,
    deleteStoryById,
    storyLiker,
    storyDisliker
}