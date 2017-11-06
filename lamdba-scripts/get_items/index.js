var mysql      = require('mysql');

exports.handler = function(event, context) {

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

	connection.query('SELECT * FROM items', function (error, results, fields) {

	context.succeed(results);
  });
}
