import dayjs from "dayjs"
import { conflictError, notFoundError } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights-repository.js"

async function addNewFlightConditions ( { origin, destination, date } ) {
    const isOriginCityIdValid = await flightsRepository.findCity(origin)

    if (isOriginCityIdValid.rowCount === 0) throw notFoundError("origin city")

    const isDestinationCityIdValid = await flightsRepository.findCity(destination)

    if (isDestinationCityIdValid.rowCount === 0) throw notFoundError("destination city")

    if (origin === destination) throw conflictError("Origin and destination must be different!")

    // const isFlightDateValid = dayjs().isBefore(dayjs(date))

    // console.log(isFlightDateValid)
    // console.log(dayjs().format("DD-MM-YYYY"))
    // console.log(typeof(date))

    // // if (isFlightDateValid === )

    const newFlightData = await flightsRepository.insertNewFlight( { origin, destination, date } )

    return newFlightData
}

export const flightsService = { addNewFlightConditions }