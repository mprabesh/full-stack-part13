const errorHandler = (error, req, res, next) => {
  if (error.message === "NOT FOUND") {
    return res.status(400).end();
  }
  return res.status(400).json(error.message);
};

const unknownEndpoint = (req, res, next) => {
  res.status(404).send({ error: "unknown endpoint" });
};
module.exports = { errorHandler, unknownEndpoint };
