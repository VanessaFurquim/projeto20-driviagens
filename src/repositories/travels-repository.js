import db from "../database/databaseConfig.js"

async function findPassenger (passengerId) {
    return db.query(`SELECT id FROM passengers WHERE id = $1;`, [passengerId])
}

async function findFlight (flightId) {
    return db.query(`SELECT id FROM flights WHERE id = $1;`, [flightId])
}

async function insertNewTrip ( { passengerId, flightId } ) {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING *;`, [passengerId, flightId])
}

export const tripsRepository = { findPassenger, findFlight, insertNewTrip }