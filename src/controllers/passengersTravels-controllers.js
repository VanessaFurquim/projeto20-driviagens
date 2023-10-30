import status from "http-status"
import { passengersTravelsService } from "../services/passengersTravels-service.js"

export async function findAllPassengersTravels (request, response) {
    const { name } = request.query

    const passengersTravelsData = await passengersTravelsService.passengersTravelsConditions(name)
    
    response.status(status.CREATED).send(passengersTravelsData.rows)
}

export const passengersTravelsController = { findAllPassengersTravels }