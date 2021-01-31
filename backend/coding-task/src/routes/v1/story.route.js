const express = require('express')
const authSimple = require('../../middlewares/auth')
const validate = require('../../middlewares/validate');
const storyController = require('../../controllers/story.controller')
const storyValidation = require('../../validations/story.validation')

const router = express.Router();

router.get('/', storyController.getStories)
router.get('/:id', storyController.getStoryById);
router.post('/', authSimple, validate(storyValidation.createStory), storyController.createStory);
router.post('/:id/like', authSimple, storyController.storyliker);
router.post('/:id/dislike', authSimple, storyController.storyDisliker);
router.delete('/:id', authSimple, storyController.deleteStoryById);


module.exports = router;