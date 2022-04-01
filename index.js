const colors = require("colors");
const log = (args) => process.stdout.write(args + "\n");

//enabling and disabling color
/**
 * @param {Boolean} color
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

//argument checker
const argChecker = (arg) => {
  if (typeof arg === "object") {
    return true;
  } else {
    return false;
  }
};

//object logger
const logObject = (color, type, arg) => {
  const print = console.log;
  print(
    colors.bold[color](`[${type}]:`) +
      colors.bold.gray(getDate()) +
      colors[color](arg)
  );
};

/**
 * @param {any} arg
 */
const info = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("green", "info", arg);
  } else {
    log(
      colors.bold.green("[info]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.info
    );
  }
};

/**
 * @param {any} arg
 */
const warn = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("yellow", "warn", arg);
  } else {
    log(
      colors.bold.yellow("[warn]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.warn
    );
  }
};

/**
 * @param {any} arg
 */
const error = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("red", "error", arg);
  } else {
    log(
      colors.bold.red("[error]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.error
    );
  }
};

/**
 * @param {any} arg
 */
const debug = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("blue", "debug", arg);
  } else {
    log(
      colors.bold.blue("[debug]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.debug
    );
  }
};

/**
 * @param {any} arg
 */
const silly = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("white", "silly", arg);
  } else {
    log(
      colors.rainbow("[silly]:") + colors.bold.gray(getDate()) + ` ${arg}`.silly
    );
  }
};

/**
 * @param {any} arg
 */
const verbose = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("cyan", "verbose", arg);
  } else {
    log(
      colors.bold.cyan("[verbose]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.verbose
    );
  }
};

/**
 * @param {any} arg
 */
const prompt = (arg) => {
  const isObject = argChecker(arg);
  if (isObject) {
    logObject("grey", "prompt", arg);
  } else {
    log(
      colors.bold.grey("[prompt]:") +
        colors.bold.gray(getDate()) +
        ` ${arg}`.prompt
    );
  }
};

module.exports = {
  info,
  warn,
  error,
  debug,
  silly,
  verbose,
  prompt,
  setColor,
};
