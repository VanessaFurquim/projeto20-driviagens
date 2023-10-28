// import dayjs from "dayjs"
import { conflictError, notFoundError } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights-repository.js"

async function addNewFlightConditions ( { origin, destination, date } ) {
    const isOriginCityIdValid = await flightsRepository.findCityById(origin)

    if (isOriginCityIdValid.rowCount === 0) throw notFoundError( { message: "This origin city is not valid!" } )

    const isDestinationCityIdValid = await flightsRepository.findCityById(destination)

    if (isDestinationCityIdValid.rowCount === 0) throw notFoundError( { message: "This destination city is not valid!" } )

    if (origin === destination) throw conflictError( { message: "Origin and destination must be different!" } )

    // const isFlightDateValid = dayjs().isBefore(dayjs(date))

    // console.log(isFlightDateValid)
    // console.log(dayjs().format("DD-MM-YYYY"))
    // console.log(typeof(date))

    // // if (isFlightDateValid === )

    const newFlightData = await flightsRepository.insertNewFlight( { origin, destination, date } )

    return newFlightData
}

async function findFlightsConditions ( { origin, destination } ) {
    let originCity
    let destinationCity
    let originCityId
    let destinationCityId

        if (origin) {
            originCity = await flightsRepository.findCityByName(origin)
        }

        if (origin && originCity === undefined) throw notFoundError( { message: "This filter does not apply! No results found for this origin." } )
        
        if (originCity !== undefined) originCityId = originCity.rows[0].id
        
        if (destination) {
            destinationCity = await flightsRepository.findCityByName(destination)
        }

        if (destination && destinationCity === undefined) throw notFoundError( { message: "This filter does not apply! No results found for this destination." } )
        
        if (destinationCity !== undefined) destinationCityId = destinationCity.rows[0].id

        const listOfFlights = await flightsRepository.findFlights( { originCityId, destinationCityId } )

    return listOfFlights
}

export const flightsService = { addNewFlightConditions, findFlightsConditions }