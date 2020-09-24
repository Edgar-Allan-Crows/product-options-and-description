const db = require('./index.js');

// create sample data
const wishesForProductWishlist = [
  {
    name:
    metal:
    price:
    imageUrl:
  }
];

// need to create seed function that will insert all sample data into database
const seed = function() {
  var sql = 'INSERT INTO wishes (name, metal, price, imageUrl) VALUES'
  db.query(sql, function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('Seed was successful');
    }
  })
}

seed();