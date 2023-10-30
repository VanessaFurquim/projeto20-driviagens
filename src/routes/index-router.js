import { Router } from "express"
import passengersRouter from "./passengers-router.js"
import citiesRouter from "./cities-router.js"
import flightsRouter from "./flights-router.js"
import travelsRouter from "./travels-router.js"
import passengersTravelsRouter from "./passengersTravels-router.js"

const router = Router()

router.use(passengersRouter)
router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter)
router.use(passengersTravelsRouter)

export default router