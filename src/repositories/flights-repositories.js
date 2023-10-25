import db from "../database/databaseConfig.js"

export async function registerNewFlightRepository ( { origin, destination, date } ) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])
}