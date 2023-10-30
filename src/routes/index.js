const { Router } = require("express")
const movieRoutes = require("./movies.routes")

const routes = Router()

routes.use("/movies", movieRoutes)

module.exports = routes