import { tripsRepository } from "../repositories/travels-repository.js"

async function createNewTripConditions ( { passengerId, flightId } ) {
    const newTripData = await tripsRepository.insertNewTrip( { passengerId, flightId } )

    return newTripData
}

export const travelsService = { createNewTripConditions }