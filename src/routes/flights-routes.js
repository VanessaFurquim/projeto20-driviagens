import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { flightSchema } from "../schemas/flights-schemas.js"
import { registerNewFlight } from "../controllers/flights-controllers.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightSchema), registerNewFlight)

export default flightsRouter