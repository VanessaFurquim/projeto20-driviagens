import BaseJoi from "joi"
import JoiDate from "@joi/date"
import dayjs from "dayjs"

const joi = BaseJoi.extend(JoiDate)

const now = dayjs().format("YYYY-MM-DD")

export const flightSchema = joi.object( {
    origin: joi.number().required(),
    destination: joi.number().required(),
    date: joi.date().greater(now).format("DD-MM-YYYY").required()
})