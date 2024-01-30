const express = require("express");
const router = express.Router();
const TodoDB = require("../model/Todo");

// GET ALL TODOS

router.get("/:email", async (req, res) => {
  const email = req.params?.email;

  try {
    const todos = await TodoDB.find({
      email: email,
    });
    if (todos.length > 0) {
      res.send({
        message: "SUCCESS",
        todos: todos,
      });
    } else {
      res.send({
        message: "SUCCESS",
        todos: [],
      });
    }
  } catch (error) {
    res.send({
      message: "ERROR",
      todos: [],
    });
  }
});

// POST A TODO
router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const todos = new TodoDB(data);
    await todos.save();
    res.send({
      message: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "ERROR",
    });
  }
});

// UPDATE A TODO
router.put("/:id", async (req, res) => {
  const todoId = req.params.id;
  const completed = req.body.completed;

  try {
    await TodoDB.findByIdAndUpdate(todoId, {
      $set: {
        completed: completed,
      },
    });
    res.send({
      message: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "ERROR",
    });
  }
});

// DELETE A TODO
router.delete("/:id", async (req, res) => {
  const todoId = req.params.id;

  try {
    await TodoDB.deleteOne({ _id: todoId });
    res.send({
      message: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "ERROR",
    });
  }
});

module.exports = router;
