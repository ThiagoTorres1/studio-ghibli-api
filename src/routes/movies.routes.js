const { Router } = require("express")
const MovieController = require("../controllers/movieController")

const movieRoutes = Router()
const movieController = new MovieController()

movieRoutes.post("/", movieController.create)
movieRoutes.get("/", movieController.index)
movieRoutes.get("/:id", movieController.show)

module.exports = movieRoutes