var dropTable = function(knex, tableName, Promise) {    
    return knex.schema.dropTable(tableName);
};

var existTable = function(knex, tableName, Promise) {
    knex.schema.hasTable(tableName).then(function(exists) {
        if(!exists){
            return false;
        }else{
            return true;
        }
    });
};

module.exports = {
    dropTable,
    existTable
}