const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  getOneTask,
  handleUpdateTask,
  handleCompleteTask,
  handleDeleteTask,
} = require("../controllers/taskController.js");

const { validateCreateTask } = require("../middleware/validateTask.js")

router.get("/", getTasks);
router.post("/", validateCreateTask, addTask);
router.get("/:id", getOneTask);
router.patch("/:id", handleUpdateTask);
router.put("/:id/complete", handleCompleteTask);
router.delete("/:id", handleDeleteTask);

module.exports = router;
