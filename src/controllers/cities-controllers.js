import { addNewCityRepository } from "../repositories/cities-repositories.js"

export async function addNewCity (request, response) {
    const { name } = request.body

    try {
        const newCityData = await addNewCityRepository(name)
      
        response.status(201).send(newCityData.rows)

    } catch (error) { response.status(500).send(error.message) }
}