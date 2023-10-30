import db from "../database/databaseConfig.js"

async function insertNewFlight ( { origin, destination, date } ) {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])
}

async function findCityById (city_id) {
    return db.query(`SELECT * FROM cities WHERE id = $1;`, [city_id])
}

async function findCityByName (cityName) {
    return db.query(`SELECT * FROM cities WHERE name = $1;`, [cityName])
}

async function findFlights ( { originCityId, destinationCityId } ) {
    let query = `SELECT *
                    FROM flights
                    WHERE 1=1
                `

        let queryEnd = `ORDER BY date DESC;`
        
        let queryComplement
        let queryComplementOrigin
        let queryComplementDestination

        const parameterValues = []

        if (originCityId) {
            parameterValues.push(originCityId)
            queryComplementOrigin = `AND origin = $${parameterValues.length} `
        }
        if (destinationCityId) {
            parameterValues.push(destinationCityId)
            queryComplementDestination = `AND destination = $${parameterValues.length} `
        }

        if (originCityId && destinationCityId) {
            queryComplement = queryComplementOrigin + queryComplementDestination
        } else if (originCityId && !destinationCityId) {
            queryComplement = queryComplementOrigin
        } else if (!originCityId && destinationCityId) {
            queryComplement = queryComplementDestination
        }

        const listOfFlights = await db.query(query + queryComplement + queryEnd, parameterValues)

        return listOfFlights
}

export const flightsRepository = { insertNewFlight, findCityById, findCityByName, findFlights }