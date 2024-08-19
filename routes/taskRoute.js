const express = require("express");

const { createTask, getTasks, deleteTask,updateTask } = require('../services/taskService');

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id",updateTask)

module.exports = router;