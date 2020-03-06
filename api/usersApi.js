var generic = require('./genericApi');
var dropTableUsers = generic.dropTable;
var existTableUsers = generic.existTable;

var createTableUsers = function(knex, Promise) {
    if(!existTableUsers(knex, 'USUARIO')){
        return knex.schema.createTable('USUARIO', function(table) { 
            table.increments().primary();
            table.string('name');
            table.string('password');
            table.string('email');
            table.datetime('created_at').defaultTo(knex.fn.now(6));
            table.string('modified_by');
            table.string('status');
        });
    }else{
        return console.error('Table already exist.');        
    }
};

var getUsers = function(knex, context, Promise) {
    if(id) {
        return knex('USUARIO').where({
            id: id
        } ).select();
    }
    return knex('USUARIO').select();
};

var postUsers = function(knex, data) {
    return  knex('USUARIO').insert({
        name:data.name, 
        password: data.password,
        email: data.email,
        status: data.status
    });
};

var putUsers = function(knex, data, id) {
    
    return knex('USUARIO')
        .where({ id: id})
        .update({
            name: data.name, 
            password: data.password,
            email: data.email,
            modified_by: data.modified_by,
            status: data.status
        });
};

var deleteUsers = function(knex, id ) {
    return knex('USUARIO')
    .where('id', id)
    .del();
};

module.exports = {
      createTableUsers,
      dropTableUsers,
      existTableUsers,
      getUsers,
      putUsers,
      postUsers,
      deleteUsers
  };