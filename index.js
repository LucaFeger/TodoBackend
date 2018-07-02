var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoModel = require('./api/models/todoModel');
var routes = require('./api/routes/todoRoute');

app = express();
port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo:todoAdminPassword@172.17.0.2:27017/todoDatabase');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);
app.listen(port);

console.log('todo backend successfully started on port ' + port);