import { flightsRepository } from "../repositories/flights-repository.js"

async function registerNewFlightConditions ( { origin, destination, date } ) {
    const newFlightData = await flightsRepository.insertNewFlight( { origin, destination, date } )

    return newFlightData
}

export const flightsService = { registerNewFlightConditions }