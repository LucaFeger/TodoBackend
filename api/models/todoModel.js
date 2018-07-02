'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = new schema({
    deviceID: {
      type: String,
      required: 'please provide a device id'
    },
    title: {
        type: String,
        required: 'Please enter a title'
    },
    description: {
        type: String,
        required: 'Please enter a description'
    },
    deadline: {
        type: String,
        required: 'Please specify the deadline date'
    }
},
    {
        collection: 'todo',
        versionKey: false
    });

module.exports = mongoose.model('todoModel', todoSchema);