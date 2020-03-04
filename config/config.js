const DBTYPE = process.env.DBTYPE || 'oracledb';
const DBNAME = process.env.DBNAME || 'xe';
const DBPORT = process.env.DBPORT || '1521';
const DBHOST = process.env.DBHOST || 'localhost';
const DBUSERNAME = process.env.DBUSERNAME || 'pkgen';
const DBPASSWORD = process.env.PASSWORD || 'oraclepass';

module.exports = {
    DBTYPE,
    DBNAME,
    DBPORT,
    DBHOST,
    DBUSERNAME,
    DBPASSWORD
};

