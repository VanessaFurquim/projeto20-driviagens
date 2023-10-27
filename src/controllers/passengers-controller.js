import { passengersService } from "../services/passengers-service.js"

export async function registerPassenger (request, response) {
    const { firstName, lastName } = request.body

    try {
        const newPassengerData = await passengersService.registerPassengerConditions( { firstName, lastName } )
      
        response.status(201).send(newPassengerData.rows)

    } catch (error) { response.status(500).send(error.message) }
}