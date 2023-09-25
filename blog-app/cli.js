require("dotenv").config();
const { Sequelize, QueryTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const cli_SQL = async () => {
  try {
    const notes = await sequelize.query(`SELECT * FROM blogs`, {
      type: QueryTypes.SELECT,
    });
    notes.map((note) => {
      console.log(`${note.author}: '${note.title}', ${note.likes} likes `);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

cli_SQL();
