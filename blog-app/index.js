const express = require("express");
const app = express();
const Blog = require("./models/blog_model");

const PORT = process.env.PORT ? process.env.PORT : 3002;

app.use(express.json());

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/api/blogs", async (req, res) => {
  const newBlog = req.body;
  console.log(req.body);
  try {
    const response = await Blog.create(newBlog);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.destroy({ where: { id } });
    res.status(201).send({ result: "Deletion successful" });
  } catch (err) {
    res.status(400).json({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
