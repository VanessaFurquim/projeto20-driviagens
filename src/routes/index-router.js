import { Router } from "express"
import passengersRouter from "./passengers-router.js"
import citiesRouter from "./cities-router.js"
import flightsRouter from "./flights-router.js"
import travelsRouter from "./travels-router.js"

const router = Router()

router.use(passengersRouter)
router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter)

export default router