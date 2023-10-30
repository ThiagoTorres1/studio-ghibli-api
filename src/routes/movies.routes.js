const { Router } = require("express")
const MovieController = require("../controllers/movieController")

const movieRoutes = Router()
const movieController = new MovieController()

movieRoutes.post("/", movieController.create)
movieRoutes.get("/")

module.exports = movieRoutes