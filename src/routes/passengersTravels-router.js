import { Router } from "express"
import { passengersTravelsController } from "../controllers/passengersTravels-controllers.js"

const passengersTravelsRouter = Router()

passengersTravelsRouter.get("/passengers/travels", passengersTravelsController.findAllPassengersTravels)

export default passengersTravelsRouter