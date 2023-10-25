import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { registerPassenger } from "../controllers/passengers-controllers.js"
import { passengerSchema } from "../schemas/passengers-schemas.js"

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), registerPassenger)


export default passengersRouter