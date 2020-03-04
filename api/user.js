const users = (table) => {
    table.increments().primary();
    table.string('name');
    table.string('password');
    table.timestamp('created_at').defaultTo(Date.now());
};
  
const createTableUsers = function(knex, Promise) {
    console.log('Probando crear tabla');
    return knex.schema.createTable('users', function(table) {
        table.increments().primary();
        table.string('name');
        table.string('password');
        table.timestamp('created_at');
    });
};

const dropTableUsers = (knex, Promise) => {
    
    knex.schema.withSchema('ia').hasTable('users').then(function(exists) {
        if (exists) {
            return knex.schema.withSchema('ia')
                .dropTable('users',users)
                .then(() =>  console.log('users table deleted') )
                .catch(() => console.log('there was an error deleting users table'))
                .finally(() => knex.destroy());
        }
    });
};


const selectUsers = (knex, Promise) => {
    return knex.schema.withSchema('ia').select().table('users');
};

const insertUsers = (knex, data) => {
    return  knex('users').insert({name:data.name, password: data.password});
}

module.exports = {
      createTableUsers,
      dropTableUsers,
      selectUsers,
      insertUsers
  };