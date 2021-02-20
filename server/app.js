const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// c6YJr32doABDPUji
const task = mongoose.model("task", { title: String });

app.post("/task", async (req, res) => {
  const taskCreated = await task.create(req.body);
  res.status(200).json(taskCreated);
});

app.get("/task", async (req, res) => {
  const tasks = await task.find();
  res.status(200).json(tasks);
});

app.patch("/task/:id", async (req, res) => {
  const id = req.params.id;
  const taskUpdated = await task.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(taskUpdated);
});

app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  const taskdeleted = await task.findByIdAndDelete(id);
  res.status(200).json(taskdeleted);
});

// let products = [];
//

//
// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.post("/products", (req, res) => {
//   const body = req.body;
//   products.push(body);
//   res.json(body);
//   console.log(req);
// });
// app.delete("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const filtredProducts = products.filter((value, index) => index != id);
//   products = filtredProducts;
//   res.json(filtredProducts);
// });
// app.patch("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   products[id] = body;
//   res.json(products);
// });
// app.use("/", (req, res) => res.send("Hello world!"));

module.exports = app;
