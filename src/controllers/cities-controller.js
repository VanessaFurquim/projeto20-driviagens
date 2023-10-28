import status from "http-status"
import { citiesService } from "../services/cities-service.js"

async function addNewCity (request, response) {
    const { name } = request.body

    const newCityData = await citiesService.addNewCityConditions(name)
        
    response.status(status.CREATED).send(newCityData.rows)
}

export const citiesController = { addNewCity }