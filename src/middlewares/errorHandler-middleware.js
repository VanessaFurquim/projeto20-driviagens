import httpStatus from "http-status"

export default function errorHandler(error, request, response, next) {
    console.log(error)

    return response.status (httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong.")
}