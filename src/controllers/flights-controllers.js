import { registerNewFlightRepository } from "../repositories/flights-repositories.js"

export async function registerNewFlight (request, response) {
    const { origin, destination, date } = request.body

    try {
        const newFlightData = await registerNewFlightRepository( { origin, destination, date } )
      
        response.status(201).send(newFlightData.rows)

    } catch (error) { response.status(500).send(error.message) }
}