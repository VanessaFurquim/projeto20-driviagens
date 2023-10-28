import { unprocessableEntityError } from "../errors/errors.js"

export function validateSchema(schema) {
    return (request, response, next) => {
        const validation = schema.validate(request.body, { abortEarly: false } )

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            console.log(errors)
            
            throw unprocessableEntityError( { message: validation.error.message } )
        }

        next()
    }
}