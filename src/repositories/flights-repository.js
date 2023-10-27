import db from "../database/databaseConfig.js"

async function insertNewFlight ( { origin, destination, date } ) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])
}

export const flightsRepository = { insertNewFlight }