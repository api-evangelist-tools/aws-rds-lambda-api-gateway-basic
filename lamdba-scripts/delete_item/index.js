var mysql      = require('mysql');

exports.handler = function(event, context) {

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

  sql = "DELETE FROM items WHERE item_ID = " + event.item_id;

  connection.query(sql, function (error, results, fields) {

  response = {};
  response['deleted'] = event.item_id;

  context.succeed(results);

  });
}
