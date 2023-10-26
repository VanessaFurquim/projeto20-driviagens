import { newTravelRepository } from "../repositories/travels-repositories.js"

export async function newTravel (request, response) {
    const { passengerId, flightId } = request.body

    try {
        const newTravelData = await newTravelRepository( { passengerId, flightId } )
      
        response.status(201).send(newTravelData.rows)

    } catch (error) { response.status(500).send(error.message) }
}