const AppError = require("../utils/appError")
const knex = require("../database/knex")

class MovieController {
  async create(request, response) {
    const {
      title, 
      description, 
      more_information,
      director, 
      producer,
      release_date,
      running_time,
      rt_score,
      image
    } = request.body

    const movieExist = await knex("movies").where({title}).first()

    if(movieExist) {
      throw new AppError("This movie already exist")
    }

    await knex("movies").insert({
      title, 
      description, 
      more_information,
      director, 
      producer,
      release_date,
      running_time,
      rt_score,
      image
    })

    return response.json()
  }

  async show(request, response) {
    const {id} = request.params

    const movieSelected = await knex("movies").where({id}).first()

    return response.json(movieSelected)
  }

  async index(request, response) {
    const allMovieSelected = await knex("movies").select("*")
    
    return response.json(allMovieSelected)
  }
} 

module.exports = MovieController