import status from "http-status"
import { flightsService } from "../services/flights-service.js"

async function addNewFlight (request, response) {
    const { origin, destination, date } = request.body

    const newFlightData = await flightsService.addNewFlightConditions( { origin, destination, date } )
    
    response.status(status.CREATED).send(newFlightData.rows)
}

export const flightsController = { addNewFlight }