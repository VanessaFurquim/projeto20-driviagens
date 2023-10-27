import { citiesRepository } from "../repositories/cities-repository.js"

async function addNewCityConditions (name) {
    const isCityAlreadyRegistered = citiesRepository.findCity(name)

    // if (isCityAlreadyRegistered !== undefined) return response.status(409).send( { message: "This city is already registered!" } )

    const newCityData = await citiesRepository.insertNewCity(name)

    return newCityData
}

export const citiesService = { addNewCityConditions }