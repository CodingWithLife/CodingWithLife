var mysql = require('mysql');
 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bayboss123',
  database : 'chat'
});

connection.connect(function(err) {
 if (!err) {
   console.log("Database is is connected...nn");
 } else {
   console.log("Error connecting database....nn");
 }
});




const chatRoom = function(amount_mesuare, carbs, carbs_time, callback) {
 connection.query(
   "INSERT INTO carbs (amount_mesuare, carbs, carbs_time) VALUES (?, ?, ?)",
   [amount_mesuare, carbs, carbs_time],
   (err, results) => {
     if (err) {
       callback(err, null);
     } else {
       console.log(results);
       callback(null, results);
     }
   }
 );
};
