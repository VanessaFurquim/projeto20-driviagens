import status from "http-status"
import { flightsService } from "../services/flights-service.js"

async function addNewFlight (request, response) {
    const { origin, destination, date } = request.body

    const newFlightData = await flightsService.addNewFlightConditions( { origin, destination, date } )
    
    response.status(status.CREATED).send({
        id: newFlightData.rows[0].id,
        origin: newFlightData.rows[0].origin,
        destination: newFlightData.rows[0].destination,
        date: newFlightData.rows[0].date
    })
}

export const flightsController = { addNewFlight }