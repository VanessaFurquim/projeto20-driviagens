import { registerPassengerRepository } from "../repositories/passengers-repositories.js"

export async function registerPassenger (request, response) {
    const { firstName, lastName } = request.body

    try {
        const newPassengerData = await registerPassengerRepository( { firstName, lastName } )
      
        response.status(201).send(newPassengerData.rows)

    } catch (error) { response.status(500).send(error.message) }
}