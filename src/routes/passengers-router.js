import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { passengerSchema } from "../schemas/passengers-schemas.js"
import { passengersController } from "../controllers/passengers-controller.js"

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengersController.registerPassenger)


export default passengersRouter