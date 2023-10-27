import db from "../database/databaseConfig.js"

async function insertNewTrip ( { passengerId, flightId } ) {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING *;`, [passengerId, flightId])
}

export const tripsRepository = { insertNewTrip }