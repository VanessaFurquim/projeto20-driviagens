import { conflictError } from "../errors/errors.js"
import { citiesRepository } from "../repositories/cities-repository.js"

async function addNewCityConditions (name) {
    const isCityAlreadyRegistered = await citiesRepository.findCity(name)

    if (isCityAlreadyRegistered.rowCount !== 0) throw conflictError("This city is already registered!") 

    const newCityData = await citiesRepository.insertNewCity(name)

    return newCityData
}

export const citiesService = { addNewCityConditions }


// esta função já checa se a cidade está registrada no banco (exemplo no exercício "me-ve-um-erro-mais-bonito", aula dia 25/10)

// let cities = []
// async function getCity(TargetCity) {
    // return cities.find(( { city } ) => city === targetCity)
// }