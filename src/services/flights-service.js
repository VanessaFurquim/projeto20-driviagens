import { conflictError, notFoundError } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights-repository.js"

async function addNewFlightConditions ( { origin, destination, date } ) {
    const isOriginCityIdValid = await flightsRepository.findCity(origin)

    if (isOriginCityIdValid.rowCount === 0) throw notFoundError("origin city")

    const isDestinationCityIdValid = await flightsRepository.findCity(destination)

    if (isDestinationCityIdValid.rowCount === 0) throw notFoundError("destination city")

    if (origin === destination) throw conflictError("Origin and destination must be different!")

    const newFlightData = await flightsRepository.insertNewFlight( { origin, destination, date } )

    return newFlightData
}

export const flightsService = { addNewFlightConditions }