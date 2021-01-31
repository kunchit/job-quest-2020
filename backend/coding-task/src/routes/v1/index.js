const express = require('express');
const authRoute = require('./auth.route');
const storyRoute = require('./story.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use(storyRoute);

module.exports = router;
