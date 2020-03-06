var express = require('express');
var knex = require('../configknex');
var users = require('../api/usersApi');

var router = express.Router();

router.route('/users/createTable').post(function(req,res) {
  users.createTableUsers(knex, users.table)
    .then(function(){
      res.json({
        error:false,
        data: {
          message: 'Table created'
        }
      });
    })
    .catch(function(err){
        res.status(500).json({
          error:true,
          data:{
            message:err.message
          }
        });
    });
  });
  
router.route('/users/:id?')
    .get(function(req,res){
          context.id = parseInt(req.params.id, 10);
          users.getUsers(knex, context)
              .then(function(collection){
                res.json({
                  error:false,
                  data: collection
                });
              })
              .catch(function(err){
                res.status(500).json({
                  error:true,
                  data:{
                    message:err.message
                  }
                });
            });
    })
    .delete(function(req,res){
      context.id = parseInt(req.params.id, 10);
          users.deleteUsers(knex, context)
            .then(function(collection){
              res.json({
                error:false,
                data: {
                  message: 'Record deleted'
                }
              });
            })
            .catch(function(err){
              res.status(500).json({
                error:true,
                data:{
                  message:err.message
                }
              });
          });
    });

router.route('/users')    
    .post(function(req,res){
          var user = {
            name: req.body.name,
            password: req.body.name,
            email: req.body.email
          };
  
          users.postUsers(knex, user)
          .then(function(id){
            res.json({
              error:false,
              data: id
            });
          })
          .catch(function(err){
            res.status(500).json({
            error:true,
            data:{
              message:err.message
            }
            });
          });
    });

module.exports = router;