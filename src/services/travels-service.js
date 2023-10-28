import { notFoundError } from "../errors/errors.js"
import { tripsRepository } from "../repositories/travels-repository.js"

async function createNewTripConditions ( { passengerId, flightId } ) {

    const isPassengerExistent = await tripsRepository.findPassenger(passengerId)

    if (isPassengerExistent.rowCount !== 0) throw notFoundError("passenger id")

    const isFlightExistent = await tripsRepository.findFlight(passengerId)

    if (isFlightExistent.rowCount !== 0) throw notFoundError("flight id")

    const newTripData = await tripsRepository.insertNewTrip( { passengerId, flightId } )

    return newTripData
}

export const travelsService = { createNewTripConditions }