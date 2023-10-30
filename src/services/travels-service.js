import { notFoundError } from "../errors/errors.js"
import { tripsRepository } from "../repositories/travels-repository.js"

async function createNewTripConditions ( { passengerId, flightId } ) {

    const isPassengerExistent = await tripsRepository.findPassenger(passengerId)

    if (isPassengerExistent.rowCount !== 0) throw notFoundError( { message: "This passenger id is not valid!" } )

    const isFlightExistent = await tripsRepository.findFlight(flightId)

    if (isFlightExistent.rowCount !== 0) throw notFoundError( { message: "This flight id is not valid!" } )

    const newTripData = await tripsRepository.insertNewTrip( { passengerId, flightId } )

    return newTripData
}

export const travelsService = { createNewTripConditions }