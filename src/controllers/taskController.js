const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  markComplete,
} = require("../utils/dataStore.js");

// getTasks
const getTasks = (req, res) => {
  let tasks = getAllTasks();
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

// addTask
const addTask = (req, res) => {
  const { title, description, priority } = req.body;
  const newTask = createTask({ title, description, priority });

  res.status(201).json({
    success: true,
    message: "New Task Created Successfully",
    data: newTask,
  });
};

// getOneTask
const getOneTask = (req, res) => {
  let task = getTaskById(Number(req.params.id));

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    data: task,
  });
};

// updateTask
const handleUpdateTask = (req, res) => {
  const task = updateTask(Number(req.params.id), req.body);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: task,
  });
};

// deleteTask
const handleDeleteTask = (req, res) => {
  const deleted = deleteTask(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: deleted,
  });
};

// handleCompleteTask
const handleCompleteTask = (req, res) => {
  const task = markComplete(Number(req.params.id));
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Task has been marked complete",
    data: task,
  });
};
// Create a getOneTask, updateTask,  deleteTask, CompleteTask(mark a item complete (put method))
module.exports = {
  getTasks,
  addTask,
  getOneTask,
  handleUpdateTask,
  handleDeleteTask,
  handleCompleteTask,
};
