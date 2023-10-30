

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
      rt_score
    } = request.body

   


    return response.json()
  }
}

module.exports = MovieController