export function conflictError (message) {
    return { type: "CONFLICT", message }
}

export function notFoundError (message) {
    return { type: "NOT FOUND", message }
}

export function unprocessableEntityError (message) {
    return { type: "UNPROCESSABLE ENTITY", message }
}