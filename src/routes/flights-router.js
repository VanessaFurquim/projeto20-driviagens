import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { flightSchema } from "../schemas/flights-schemas.js"
import { flightsController } from "../controllers/flights-controller.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightSchema), flightsController.addNewFlight)

export default flightsRouter