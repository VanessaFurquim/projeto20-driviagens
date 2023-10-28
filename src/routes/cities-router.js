import { Router } from "express"
import { citySchema } from "../schemas/cities-schemas.js"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { citiesController } from "../controllers/cities-controller.js"

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citySchema), citiesController.addNewCity)

export default citiesRouter