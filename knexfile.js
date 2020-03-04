const database = require('./database').stringConn;
console.log(database);
// Update with your config settings.

module.exports = {
  development: database,
  staging: database,
  production: database

};
