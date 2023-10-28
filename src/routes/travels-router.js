import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { travelSchema } from "../schemas/travels-schemas.js"
import { travelsController } from "../controllers/travels.controller.js"

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelSchema), travelsController.createNewTrip)

export default travelsRouter