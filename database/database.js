var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'strangerFriend',
    user     : 'pancho',
    password : 'password',
});

var selectUser = function(callback) {
  connection.query('SELECT * FROM User', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectMessage = function(callback) {
  connection.query('SELECT * FROM chatRoom', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
