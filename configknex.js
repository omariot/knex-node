var knexfile = require('./config/knexfile.js');
var knex = require('knex')(knexfile.development);

module.exports = knex;
