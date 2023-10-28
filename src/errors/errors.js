export function conflictError (message) {
    return { type: "CONFLICT", message }
}

export function notFoundError (item) {
    return { type: "NOT FOUND", message: `This ${item} is not valid!` }
}