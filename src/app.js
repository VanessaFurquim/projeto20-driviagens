import express, { json } from "express"
import "express-async-errors"
import cors from "cors"
import db from "./database/databaseConfig.js"
import router from "./routes/index-router.js"
import errorHandler from "./middlewares/errorHandler-middleware.js"


const app = express()

app.use(json())
app.use(cors())

app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))