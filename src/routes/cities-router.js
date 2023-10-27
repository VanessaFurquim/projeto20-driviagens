import { Router } from "express"
import { citySchema } from "../schemas/cities-schemas.js"
import { addNewCity } from "../controllers/cities-controller.js"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citySchema), addNewCity)

export default citiesRouter