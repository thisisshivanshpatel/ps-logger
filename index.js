const colors = require("colors");
const fs = require("fs");

/** flag for allowing to log in a file */
let fileLog = false;

/** Create a writable stream to the log file */
const logStream = fs.createWriteStream("./ps-logger.log", { flags: "a" });

/** core method to log in console and file */
const log = (args) => {
  process.stdout.write(args + "\n");

  if (fileLog) {
    logStream.write(args + "\n");
  }
};

/**
 *  used for logging your terminal output in `ps-logger.log` file
 *
 *  use this method only once it will work globally to output all your logs in log file
 *
 * @default - false
 * @param {boolean} fileLogging - it accepts a boolean value
 *
 */
const logToFile = (fileLogging = false) => {
  if (fileLogging) {
    fileLog = true;
    setColor(false);
  }
};

/**
 * `setColor` method is used for setting colors
 *
 * @param {boolean} color - it accepts a boolean value
 */
const setColor = (color = true) => (color ? colors.enable() : colors.disable());

//setting theme
colors.setTheme({
  silly: "rainbow",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

const getDate = () => {
  //setting time in (HH:MM:SS)
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${hours}:${minute}:${second}`;
};

/**
 * used for logging info messages
 *
 * @param {any} arg
 */
const info = (arg) => {
  log(
    colors.bold.green("[info]:") + colors.bold.gray(getDate()) + ` ${arg}`.info
  );
};

/**
 * used for logging warn messages
 *
 * @param {any} arg
 */
const warn = (arg) => {
  log(
    colors.bold.yellow("[warn]:") + colors.bold.gray(getDate()) + ` ${arg}`.warn
  );
};

/**
 * used for logging error messages
 *
 * @param {any} arg
 */
const error = (arg) => {
  log(
    colors.bold.red("[error]:") + colors.bold.gray(getDate()) + ` ${arg}`.error
  );
};

/**
 * used for logging debug messages
 *
 * @param {any} arg
 */
const debug = (arg) => {
  log(
    colors.bold.blue("[debug]:") + colors.bold.gray(getDate()) + ` ${arg}`.debug
  );
};

/**
 * used for logging silly messages
 *
 * @param {any} arg
 */
const silly = (arg) => {
  log(
    colors.rainbow("[silly]:") + colors.bold.gray(getDate()) + ` ${arg}`.silly
  );
};

/**
 * used for logging verbose messages
 *
 * @param {any} arg
 */
const verbose = (arg) => {
  log(
    colors.bold.cyan("[verbose]:") +
      colors.bold.gray(getDate()) +
      ` ${arg}`.verbose
  );
};

/**
 * used for logging prompt messages
 *
 * @param {any} arg
 */
const prompt = (arg) => {
  log(
    colors.bold.grey("[prompt]:") +
      colors.bold.gray(getDate()) +
      ` ${arg}`.prompt
  );
};

// Close the log stream when you are done
// logStream.end();

module.exports = {
  info,
  warn,
  error,
  debug,
  silly,
  verbose,
  prompt,
  setColor,
  logToFile,
};
