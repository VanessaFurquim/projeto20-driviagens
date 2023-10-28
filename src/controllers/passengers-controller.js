import status from "http-status"
import { passengersService } from "../services/passengers-service.js"

async function registerPassenger (request, response) {
    const { firstName, lastName } = request.body

    const newPassengerData = await passengersService.registerPassengerConditions( { firstName, lastName } )
    
    response.status(status.CREATED).send(newPassengerData.rows)
}

export const passengersController = { registerPassenger }