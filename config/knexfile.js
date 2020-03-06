const database = require('./database').stringConn;
// Update with your config settings.

module.exports = {
  development: database,
  staging: database,
  production: database

};
