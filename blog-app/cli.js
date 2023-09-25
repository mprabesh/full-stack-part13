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
    const blogs = await sequelize.query(`SELECT * FROM blogs`, {
      type: QueryTypes.SELECT,
    });
    blogs.map((blog) => {
      console.log(`${blog.author}: '${blog.title}', ${blog.likes} likes `);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

cli_SQL();
