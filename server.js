var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var knex = require('./configknex');
var router = require('./routes/index');
//var _ = require('underscore');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Cors 
app.options('*', cors());

app.use('/api', router );

app.listen(process.env.PORT,function(){
  console.log( 'Express listening on Port ' + process.env.PORT );
});
