var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./api/routes/todoRoute');
var todoModel = require('./api/models/todoModel');
var connectModel = require('./api/models/connectModel');
var https = require('https');
var fs = require('fs');

app = express();
port = process.env.PORT || 3000;


options= {
    key: fs.readFileSync('/etc/letsencrypt/live/lucafeger.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/lucafeger.de/fullchain.pem'),
};


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo:todoAdminPassword@172.17.0.2:27017/todoDatabase');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Origin');
    next();
});


routes(app);
https.createServer(options, app).listen(port, function(){
    console.log('todo backend successfully started on port ' + port);
});