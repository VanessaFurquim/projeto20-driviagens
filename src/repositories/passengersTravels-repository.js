import db from "../database/databaseConfig.js"

async function findAllPassengersTravels (passengerName) {
    let listOfPassengersTravels

    let queryBeggining = `SELECT
                        passengers."firstName",
                        passengers."lastName",
                    COUNT(travels."passengerId") AS "travels"
                    FROM travels
                    RIGHT JOIN passengers ON travels."passengerId" = passengers.id
                `
    let queryFilter = `WHERE passengers."firstName" LIKE $1
                        OR passengers."lastName" LIKE $2
                    `

    let queryEnd = `GROUP BY travels."passengerId",
                            passengers."firstName",
                            passengers."lastName"
                    ORDER BY "travels" DESC;
                    `
                    
    let fullQuery

    if(passengerName){
        fullQuery = queryBeggining + queryFilter + queryEnd;
        console.log(fullQuery)
        return listOfPassengersTravels = await db.query(fullQuery, [`%${passengerName}%`, `%${passengerName}%`])
    }

    fullQuery = queryBeggining + queryEnd
    

    listOfPassengersTravels = await db.query(fullQuery)

    return listOfPassengersTravels
}

export const passengersTravelsRepository = { findAllPassengersTravels }