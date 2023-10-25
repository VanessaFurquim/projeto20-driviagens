import BaseJoi from "joi"
import JoiDate from "@joi/date"

const joi = BaseJoi.extend(JoiDate)

export const flightSchema = joi.object( {
    origin: joi.number().required(),
    destination: joi.number().required(),
    date: joi.date().format("DD-MM-YYYY").required()
})