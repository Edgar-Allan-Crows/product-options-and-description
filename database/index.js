const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'Rootuser1!',
  database: 'ProductWishlist'
});

connection.connect(function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Database connected!');
  }
});

module.exports = connection;