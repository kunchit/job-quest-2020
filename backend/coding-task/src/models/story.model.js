
const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const storySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        likers: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        }],
        dislikers: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        }]
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

// add plugin 
storySchema.plugin(toJSON);

const Story = mongoose.model('Story', storySchema);

module.exports = Story;