export function validateSchema(schema) {
    return (request, response, next) => {
        const validation = schema.validate(request.body, { abortEarly: false } )

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            console.log(errors)
            return response.status(422).send(errors)
            // throw { type: "UNPROCESSABLE ENTITY", message: error.message }
        }

        next()
    }
}