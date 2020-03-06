var express = require("express");
var knex = require("../configknex");

// APIS
var users = require("../api/usersApi");

var router = express.Router();

// Users
router.route("/users/createTable").post(function(req, res) {
  users
    .createTableUsers(knex)
    .then(function() {
      res.json({
        error: false,
        data: {
          message: "Table created"
        }
      });
    })
    .catch(function(err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message
        }
      });
    });
});

router
  .route("/users/:id?")
  .get(function(req, res) {
    id = parseInt(req.params.id, 10);

    users
      .getUsers(knex, id)
      .then(function(collection) {
        res.json({
          error: false,
          data: collection
        });
      })
      .catch(function(err) {
        res.status(500).json({
          error: true,
          data: {
            message: err.message
          }
        });
      });
  })
  .put(function(req, res) {
    id = parseInt(req.params.id, 10);
    data = req.body;
    users
      .putUsers(knex, data, id)
      .then(function(collection) {
        res.json({
          error: false,
          id: id,
          data: {
            data: collection,
            message: "Record updated"
          }
        });
      })
      .catch(function(err) {
        res.status(500).json({
          error: true,
          data: {
            message: err.message
          }
        });
      });
  })
  .delete(function(req, res) {
    id = parseInt(req.params.id, 10);
    users
      .deleteUsers(knex, id)
      .then(function(collection) {
        res.json({
          error: false,
          data: {
            id: id,
            message: "Record deleted"
          }
        });
      })
      .catch(function(err) {
        res.status(500).json({
          error: true,
          data: {
            message: err.message
          }
        });
      });
  });

router.route("/users").post(function(req, res) {
  var user = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status
  };

  users
    .postUsers(knex, user)
    .then(function(id) {
      res.json({
        error: false,
        data: {
          id: id,
          message: "Record inserted."
        }
      });
    })
    .catch(function(err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message
        }
      });
    });
});

module.exports = router;
