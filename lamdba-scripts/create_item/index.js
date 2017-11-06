var mysql  = require('mysql');

exports.handler = function(event, context) {

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

  sql = "INSERT INTO items(name)";

  sql = sql + " VALUES('" + event.name + "')";

  connection.query(sql, function (error, results, fields) {

  response = {};
  response['item_id'] = results.insertId;
  response['name'] = event.name;

  context.succeed(response);
  });
}
