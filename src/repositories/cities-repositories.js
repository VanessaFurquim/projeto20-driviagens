import db from "../database/databaseConfig.js"

export async function addNewCityRepository (name) {
    return db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING *;`, [name])
}