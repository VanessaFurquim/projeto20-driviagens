import db from "../database/databaseConfig.js"

async function findAllPassengersTravels (passengerName) {
    let queryBeggining = `SELECT
                        passengers."firstName",
                        passengers."lastName",
                    COUNT(travels."passengerId") AS "travels"
                    FROM travels
                    RIGHT JOIN passengers ON travels."passengerId" = passengers.id
                `
    let queryFilter = `WHERE passengers."firstName" LIKE '%${passengerName}%'
                        OR passengers."lastName" LIKE '%${passengerName}%'
                    `

    let queryEnd = `GROUP BY travels."passengerId",
                            passengers."firstName",
                            passengers."lastName"
                    ORDER BY "travels" DESC;
                    `
                    
    let fullQuery

    // const parameterValues = []

    if (passengerName) {
        fullQuery = queryBeggining + queryFilter + queryEnd
    } else {
        fullQuery = queryBeggining + queryEnd
    }

    const listOfPassengersTravels = db.query(fullQuery)

    return listOfPassengersTravels
}

export const passengersTravelsRepository = { findAllPassengersTravels }