const Sequelize = require("sequelize");

const FilmModel = require("./models/films");

const sequelize = new Sequelize(
  "mysql://root:krea2019@localhost:3306/Sequalize"
);

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  Film,
};
