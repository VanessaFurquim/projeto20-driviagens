import { passengersTravelsRepository } from "../repositories/passengersTravels-repository.js"

async function passengersTravelsConditions (passengerName) {

    const passengerTravelsData = await passengersTravelsRepository.findAllPassengersTravels(passengerName)

    return passengerTravelsData
}

export const passengersTravelsService = { passengersTravelsConditions }