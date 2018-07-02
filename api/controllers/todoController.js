'use strict';

const mongoose = require('mongoose');
const todoModel = mongoose.model('todoModel');

exports.createEntry = (req, res) => {
    console.log(req.body.toString());
    console.log('GOT REQUEST with body: ' + req.body);

    new todoModel(req.body)
        .save((err, model) => {
            if (err) res.send(err);
            res.json(model);
        })
};

exports.deleteEntry = (req, res) => {
    todoModel.remove({
        title: req.params.title,
        deviceID: req.params.deviceID
    }, (err, model) => {
        if (err) res.send(err);
        res.json({"success": true, "result": "Deleted entry successfully"});
    })
};

exports.updateEntry = (req, res) => {
    console.log('got update entry');
    console.log(req.params.title);
    console.log(JSON.stringify(req.body));
    todoModel.findOneAndUpdate({title: req.params.title, deviceID: req.params.deviceID}, req.body, {"new": true}, (err, model) => {
        console.log(model);
        if (err) res.send(err);
        res.json({"result": "updatet successfully"});
    })
};

exports.getTitles = (req, res) => {
    const query = todoModel.find({deviceID: req.params.deviceID}).select('title deadline -_id');
    query.exec((err, model) => {
        if (err) res.send(err);
        res.send(model);
    })
};

exports.getInformation = (req, res) => {

    const query = todoModel.findOne({deviceID: req.params.deviceID, title: req.params.title}).select('title deadline description -_id');
    query.exec((err, model) => {
        if (err) res.send(err);
        res.send(model);
    });
}