import db from "../database/databaseConfig.js"

async function insertNewCity (name) {
    return db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING *;`, [name])
}

async function findCity (name) {
    return db.query(`SELECT name FROM cities WHERE name = $1;`, [name])
}

export const citiesRepository = { insertNewCity, findCity }