const requestLogger = (req, res, next) => {
  //without the next the api will end at that point instead of moving to the next stage
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  const browserAndDeviceDetails = req.get("user-agent")
  console.log(`[${timestamp}] [${method}] [${path}]  [${ip}] [${browserAndDeviceDetails}]`);
  next();
};

module.exports = requestLogger;
