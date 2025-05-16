"use strict";

const pgp = require("pg-promise")();

const db = pgp({
    user: process.env.USER,
    port: Number(process.env.PORT),
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
});

module.exports = { db };
