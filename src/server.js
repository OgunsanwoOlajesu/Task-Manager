const express = require("express");
const requestLogger = require("./middleware/loggerMiddleware.js");
const errorHandler = require("./middleware/errorMiddleware.js");
const taskRoutes = require("./routes/taskRoute.js");


const app = express();
const PORT = 5502;




app.use(express.json());
app.use(requestLogger);



app.get("/", (req, res) => {
  res.json({ message: "I am a Junior BackEnd engineer" });
});



app.use("/api/tasks", taskRoutes);



app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Task Manager is running on ${PORT}`);
});
