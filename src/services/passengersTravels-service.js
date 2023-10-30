import { notFoundError } from "../errors/errors.js"
import { passengersTravelsRepository } from "../repositories/passengersTravels-repository.js"

async function passengersTravelsConditions (passengerName) {

    const passengerTravelsData = await passengersTravelsRepository.findAllPassengersTravels(passengerName)

    // const passengersWithZeroTravels = await passengersTravelsRepository.findPassengersWithZeroTravels()


    // const listOfPassengersByName = passengerTravelsData.rows.passenger.map(singleFlight => {
    //     return {
    //         id: singleFlight.id,
    //         origin: singleFlight.origin,
    //         destination: singleFlight.destination,
    //         date: dayjs(singleFlight.date).format("DD-MM-YYYY")
    //     }
    // })

    return passengerTravelsData
}

export const passengersTravelsService = { passengersTravelsConditions }