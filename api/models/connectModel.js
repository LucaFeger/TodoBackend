'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const connectSchema = new schema({
    deviceID: {
      type: String,
      required: 'please provide a device id'
    },
    timestamp: {
        type: Number,
        required: 'Please enter a timestamp'
    }
},
    {
        collection: 'todo',
        versionKey: false
    });

module.exports = mongoose.model('connectModel', connectSchema);