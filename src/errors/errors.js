export function conflictError (message) {
    return { type: "CONFLICT", message }
}

export function notFoundError (item) {
    return { type: "NOT FOUND", message: `This ${item} is not valid!` }
}

export function unprocessableEntityError (message) {
    return { type: "UNPROCESSABLE ENTITY", message }
}