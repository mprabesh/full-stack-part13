const express = require("express");
const app = express();
const blogRouter = require("./controllers/blog");
const { PORT } = require("./util/config");
const { errorHandler, unknownEndpoint } = require("./util/middleware");
const { connectToDatabase } = require("./util/db");

app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("*", unknownEndpoint);

app.use(errorHandler);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
};

start();
