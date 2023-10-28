import dayjs from "dayjs"
import status from "http-status"
import { flightsService } from "../services/flights-service.js"


async function addNewFlight (request, response) {
    const { origin, destination, date } = request.body

    const newFlightData = await flightsService.addNewFlightConditions( { origin, destination, date } )
    
    response.status(status.CREATED).send(newFlightData.rows)
}

async function findAllFlights (request, response) {
    const { origin, destination } = request.query

    const allFlightsData = await flightsService.findFlightsConditions( { origin, destination } )

    const listOfFlights = allFlightsData.rows.map(singleFlight => {
        return {
            id: singleFlight.id,
            origin: singleFlight.origin,
            destination: singleFlight.destination,
            date: dayjs(singleFlight.date).format("DD-MM-YYYY")
        }
    })

    response.status(status.OK).send(listOfFlights)
}

export const flightsController = { addNewFlight, findAllFlights }