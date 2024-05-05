const { Pool, Client } = require('pg');

const pool = new Pool({
    host: "localhost",
    port: "5432T",
    user: "gamersguild",
    //password: process.env.PG_PASSWORD,
    password: "gamersguild",
    database: "gamersguild",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: false
});


module.exports = {
    pool: () => pool,
    query: (text, params) => pool.query(text, params),
};