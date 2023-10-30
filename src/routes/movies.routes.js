const { Router } = require("express")

const movieRoutes = Router()

movieRoutes.post("/")
movieRoutes.get("/")

module.exports = movieRoutes