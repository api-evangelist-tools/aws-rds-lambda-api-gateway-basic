var mysql      = require('mysql');

exports.handler = function(event, context) {

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

  sql = "UPDATE items SET ";

  sql = sql + "name = '" + event.name + "'";

  sql = sql + " WHERE item_id = " + event.item_id;

	connection.query(sql, function (error, results, fields) {

  response = {};
  response['item_id'] = event.item_id;
  response['name'] = event.name;

  context.succeed(response);

  });
}
