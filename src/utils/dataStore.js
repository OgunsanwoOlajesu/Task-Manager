let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    description: "Complete the 4-week backend course",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-01-01T09:00:00").toISOString(),
    updatedAt: new Date("2025-01-01T09:00:00").toISOString(),
  },
  {
    id: 2,
    title: "Build a REST API",
    description: "Create a Task Manager API with Express",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-01-02T10:00:00").toISOString(),
    updatedAt: new Date("2025-01-02T10:00:00").toISOString(),
  },
  {
    id: 3,
    title: "Build a TYPESCRIPT BACKEND FILE",
    description: "Create a FULLSTACK TYPESCRIPT PROJECT",
    completed: true,
    priority: "high",
    createdAt: new Date("2025-01-02T10:00:00").toISOString(),
    updatedAt: new Date("2025-01-02T10:00:00").toISOString(),
  },
];

let nextId = 3;

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

// console.log(getTaskById(1));

const createTask = (taskData) => {
  const newTask = {
    id: ++nextId,
    title: taskData.title,
    description: taskData.description || "",
    completed: false,
    priority: taskData.priority || "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  return newTask;
};

// console.log(createTask({title:"write code", description: "backend with golang",}));

const updateTask = (id, updates) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    ...updates,
    id: tasks[index].id,
    createdAt: tasks[index].createdAt,
    updatedAt: new Date().toISOString(),
  };

  return tasks[index];
};

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

// write a logic to mark a task complete
const markComplete = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    completed: true,
    updatedAt: new Date().toISOString(),
  };
  return tasks[index];
};

// console.log(
//   updateTask(2, {
//     title: "making pizza",
//     description: "making italian pizza for camping",
//   }),
// );
// console.log(deleteTask(1));

// console.log(markComplete(2));
// console.log(getAllTasks());

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  markComplete,
};
