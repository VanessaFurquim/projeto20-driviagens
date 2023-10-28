export function conflictError (item) {
    return { type: "CONFLICT", message: `This ${item} is already registered!` }
}