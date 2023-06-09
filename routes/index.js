const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});
const promisePool = pool.promise();


router.get('/', async function (req, res) {
    const [rows] = await promisePool.query("SELECT * from jballtest ORDER BY score DESC;");
    print ([rows]);
});

router.post('/', async function (req, res, next) {
    const {title, content } = req.body;
    const [rows] = await promisePool.query('INSERT INTO jballtest (name, score) VALUES (?, ?)', [player, score]);
});

module.exports = router;