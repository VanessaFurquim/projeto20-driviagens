import db from "../database/databaseConfig.js"

async function insertNewFlight ( { origin, destination, date } ) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])
}

async function findCity (city_id) {
    return db.query(`SELECT * FROM cities WHERE id = $1;`, [city_id])
}

export const flightsRepository = { insertNewFlight, findCity }