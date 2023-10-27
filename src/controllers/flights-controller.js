import { flightsService } from "../services/flights-service.js"

export async function registerNewFlight (request, response) {
    const { origin, destination, date } = request.body

    try {
        const newFlightData = await flightsService.registerNewFlightConditions( { origin, destination, date } )
      
        response.status(201).send(newFlightData.rows)

    } catch (error) { response.status(500).send(error.message) }
}