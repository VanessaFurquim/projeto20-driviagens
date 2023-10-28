import status from "http-status"
import { travelsService } from "../services/travels-service.js"

export async function createNewTrip (request, response) {
    const { passengerId, flightId } = request.body

    const newTripData = await travelsService.createNewTripConditions( { passengerId, flightId } )
    
    response.status(status.CREATED).send(newTripData.rows)
}

export const travelsController = { createNewTrip }