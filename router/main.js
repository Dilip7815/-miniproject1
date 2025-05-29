

const fs = require('fs')
const path = require('path');

// use to parse form data object in request body
const multiparty = require('multiparty');
var parse = require('./parse.js');

module.exports = function (app) {
   // route to send index.html to client
   app.get('/', function (req, res) {
      res.render('index.html')
   });

   // route to handle POST request
   app.post('/submit-Command-data', function (req, res) {
      var form = new multiparty.Form();
      form.parse(req, function (err, fields, files) {
         var commandName = fields.command[0];
         parse.parseCommand(commandName, fields, res, files);
         if (err) {
            res.error(commandName + ' Error!');
         }
         res.status(200).send(commandName + ' success!');
      });
   });

   // route to send bundel.js to client
   app.get('/bundle.js', function (req, res) {
      res.sendfile('bundle.js', { root: path.join(__dirname, '../') })
   });
}