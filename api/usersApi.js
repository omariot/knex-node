var tableName = 'USUARIO';
var table = function(table) {
    table.increments().primary();
    table.string('name');
    table.string('password');
    table.string('email');
    table.timestamp('created_at').defaultTo(Date.now());
};
  
var createTableUsers = function(knex, Promise) {
    console.log('Probando crear tabla');
    if (this.existTableUsers()){        
        return knex.schema.createTable(this.tableName, function(table) { 
            table = this.table;
        });
    }
    return;
};

var dropTableUsers = function(knex, Promise) {    
    return knex.schema.dropTable(this.tableName);
};

var existTableUsers = function(knex, Promise) {
    return knex.schema.hasTable(this.tableName).then(function(exists) {
        return exists;
    });
};

var getUsers = function(knex, context, Promise) {
    if(context.id) {
        return knex(this.tableName).where({
            id: context.id
        } ).select();
    }
    return knex(this.tableName).select();
};

var postUsers = function(knex, data) {
    return  knex(this.tableName).insert({
        name:data.name, 
        password: data.password,
        email: data.email
    });
};

var putUsers = function(knex, data, id) {
    
    return knex(this.tableName)
        .where({ id:data.id})
        .update({
            name:data.name, 
            password: data.password,
            email: data.email
        });
};

var deleteUsers = function(knex, id ) {
    return knex(this.tableName)
    .where('id', id)
    .del();
};

module.exports = {
      table,
      createTableUsers,
      dropTableUsers,
      existTableUsers,
      getUsers,
      putUsers,
      postUsers,
      deleteUsers
  };