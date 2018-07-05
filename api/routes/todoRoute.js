'use strict';
module.exports = (app) => {
  var todoController = require('../controllers/todoController');

  app.route('/createEntry')
      .post(todoController.createEntry);

  app.route('/deleteEntry/:deviceID/:title')
      .post(todoController.deleteEntry);

  app.route('/updateEntry/:deviceID/:title')
      .post(todoController.updateEntry);

  app.route('/getTitles/:deviceID')
      .get(todoController.getTitles);

  app.route('/getEntries/:deviceID')
      .get(todoController.getEntries);

  app.route('/getInformation/:deviceID/:title')
      .get(todoController.getInformation);


  app.route('/connectOnline')
      .post(todoController.createConnectEntry);

  app.route('validateConnect/:deviceID')
      .get(todoController.checkValidaty);

};