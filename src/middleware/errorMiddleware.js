const errorHandler = (err, req, res, next) => {
  console.log("Error Occured");

  console.log(` ${req.method} ${req.OriginalUrl}`);

  // log error details
  console.log(" Message:", err.message);
  console.log("Stack:", err.stack);

  // the code jumps to line 15 if the error is not from the server side
  let statusCode = err.statusCode || 500;
  let message = err.message || "internal server error";

  if (err.type === "entity.parse.failed") {
    statusCode = 400;
    message = "Invalid JSON Format";
  }

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format";
  }
  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
