import { passengersRepository } from "../repositories/passengers-repository.js"


async function registerPassengerConditions ( { firstName, lastName } ) {
    const newPassengerData = await passengersRepository.insertNewPassenger( { firstName, lastName } )

    return newPassengerData
}

export const passengersService = { registerPassengerConditions }