// Define ANSI escape codes for various colors and styles
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",
  fgGray: "\x1b[90m", // Bright Black/Gray

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  bgGray: "\x1b[100m", // Bright Black Background/Gray Background
};

// Custom logging function
function log(message, colorCode = colors.reset) {
  console.log(`${colorCode}${message}${colors.reset}`);
}

// Examples of colored logging:
log("This is a normal log message.");
log("This is a red error message.", colors.fgRed);
log("This is a green success message.", colors.fgGreen);
log("This is a yellow warning message.", colors.fgYellow);
log("This is a blue informational message.", colors.fgBlue);
log("This is a magenta debugging message.", colors.fgMagenta);
log("This is a cyan highlight.", colors.fgCyan);
log("This is a bright white message.", colors.fgWhite);
log("This is a gray message.", colors.fgGray);

// Combining styles
log(
  `${colors.bright}${colors.fgBlue}This is a bright blue message.${colors.reset}`,
);
log(
  `${colors.underscore}${colors.fgGreen}This is an underlined green message.${colors.reset}`,
);
log(
  `${colors.bgRed}${colors.fgWhite}This has a red background and white text.${colors.reset}`,
);

// A more structured logging approach
const logger = {
  info: (message) =>
    console.log(`${colors.fgBlue}INFO: ${message}${colors.reset}`),
  warn: (message) =>
    console.log(`${colors.fgYellow}WARN: ${message}${colors.reset}`),
  error: (message) =>
    console.log(`${colors.fgRed}ERROR: ${message}${colors.reset}`),
  success: (message) =>
    console.log(`${colors.fgGreen}SUCCESS: ${message}${colors.reset}`),
  debug: (message) =>
    console.log(`${colors.fgMagenta}DEBUG: ${message}${colors.reset}`),
};

logger.info("This is info");
logger.warn("This is warn");
logger.error("This is error");
logger.success("This is success");
logger.debug("This is debug");
