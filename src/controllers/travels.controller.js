import { travelsService } from "../services/travels-service.js"

export async function createNewTrip (request, response) {
    const { passengerId, flightId } = request.body

    try {
        const newTripData = await travelsService.createNewTripConditions( { passengerId, flightId } )
      
        response.status(201).send(newTripData.rows)

    } catch (error) { response.status(500).send(error.message) }
}