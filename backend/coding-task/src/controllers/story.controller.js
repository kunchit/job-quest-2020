const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { storyService } = require('../services');


const createStory = catchAsync(async (req, res) => {
    const story = await storyService.createStory(req.body);
    res.status(httpStatus.CREATED).send(story);
});

const getStories = catchAsync(async (req, res) => {
    const stories = await storyService.getStories(req.body);
    res.status(httpStatus.OK).send(stories);
});

const getStoryById = catchAsync(async (req, res) => {
    const story = await storyService.getStoryById(req.params.id);
    res.status(httpStatus.OK).send(story);
});

const deleteStoryById = catchAsync(async (req, res) => {
    await storyService.deleteStoryById(req.params.id);
    res.status(httpStatus.NO_CONTENT).send();
});

const storyliker = catchAsync(async (req, res) => {

    const story = await storyService.storyLiker(req.user.id, req.params.id);
    res.status(httpStatus.OK).send(story);
})

const storyDisliker = catchAsync(async (req, res) => {
    const story = await storyService.storyDisliker(req.user.id, req.params.id);
    res.status(httpStatus.OK).send(story);
})


module.exports = {
    createStory,
    getStories,
    getStoryById,
    deleteStoryById,
    storyliker,
    storyDisliker
}