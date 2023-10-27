import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema-middleware.js"
import { travelSchema } from "../schemas/travels-schemas.js"
import { createNewTrip } from "../controllers/travels.controller.js"

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelSchema), createNewTrip)

export default travelsRouter