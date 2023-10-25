import db from "../database/databaseConfig.js"

export async function registerPassengerRepository ( { firstName, lastName } ) {
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING *;`, [firstName, lastName])
}