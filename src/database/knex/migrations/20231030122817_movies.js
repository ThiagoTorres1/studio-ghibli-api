exports.up = knex => knex.schema.createTable("movies", table => {
  table.increments("id")
  table.text("title").notNullable()
  table.text("description").notNullable()
  table.text("more_information")
  table.text("director")
  table.text("producer")
  table.text("release_date")
  table.text("running_time").notNullable()
  table.text("rt_score")
})

exports.down = knex => knex.schema.dropTable("movies")