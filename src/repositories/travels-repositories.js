import db from "../database/databaseConfig.js"

export async function newTravelRepository ( { passengerId, flightId } ) {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING *;`, [passengerId, flightId])
}