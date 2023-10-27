import db from "../database/databaseConfig.js"

async function insertNewPassenger ( { firstName, lastName } ) {
    return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING *;`, [firstName, lastName])
}

export const passengersRepository = { insertNewPassenger }