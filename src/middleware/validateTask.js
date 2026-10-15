const VALID_PRIORITIES = ["low", "medium", "high"];

const validateAndNormalizePriority = (priority, res) => {
  const normalized = priority.trim().toLowercase();

  if (!VALID_PRIORITIES.includes(normalized)) {
    res.status(400).json({
      success: false,
      message: "Validation Error: 'priority' must be one of: low, medium, high",
    });
    return null;
  }
  return normalized;
};

const validateCreateTask = (req, res, next) => {
  let { title, priority } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Validation Error: Title is required",
    });
  }

  title = title.trim();
  if (title === "") {
    res.status(400).json({
      success: false,
      message: "Validation Error: Title cannot be empty",
    });
  }
  if (title.length >= 50) {
    return res.status(400).json({
      success: false,
      message: "Validation Error: 'title' must be 50 characters or less ",
    });
  }

  // save cleaned title
  req.body.title = title;

  if (priority !== undefined) {
    const normalizedPriority = validateAndNormalizePriority(priority, res);
    if (!normalizedPriority) return;

    req.body.priority = normalizedPriority;
  }

  next();
};

const validateUpdateTask = (req, res, next) => {
  let { title, description, priority } = req.body;
  if (
    title === undefined &&
    description === undefined &&
    priority === undefined
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Validation Error: Provide at least one field to update (title, description, priority) ",
    });
  }
  if (title !== undefined) {
    title = title.trim();
  }
  if (title === "") {
    res.status(400).json({
      success: false,
      message: "Validation Error: Title cannot be empty",
    });
    req.body.title = title;
  }
  if (priority !== undefined) {
    const normalizedPriority = validateAndNormalizePriority(priority, res);
    if (!normalizedPriority) return;

    req.body.priority = normalizedPriority;
  }
  next();
};

module.exports = { validateCreateTask };
