const { createLogger, format, transports, log } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp("YYYY-MM-DD HH::mm::ss"), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
