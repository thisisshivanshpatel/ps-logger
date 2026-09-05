const fs = require("fs");

let colorToggle = true;
let interval;

/**
 * `setColor` method is used for setting colors
 *
 * @param {boolean} color - it accepts a boolean value
 */
const setColor = (color = true) =>
  color ? (colorToggle = true) : (colorToggle = false);

//colors
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

const rainbowColors = [
  "\x1b[31m", // Red
  "\x1b[33m", // Yellow (Closest to Orange)
  "\x1b[93m", // Bright Yellow
  "\x1b[32m", // Green
  "\x1b[34m", // Blue
  "\x1b[35m", // Magenta (Indigo/Violet)
  "\x1b[36m", // Cyan
];

const colorsObj = {
  red: rainbowColors[0],
  yellow: rainbowColors[1],
  brightYellow: rainbowColors[2],
  green: rainbowColors[3],
  blue: rainbowColors[4],
  magenta: rainbowColors[5],
  cyan: rainbowColors[6],
};

/** flag for allowing to log in a file */
let fileLog = false;

let logStream;

/**
 * Remove ANSI escape sequences from strings when colors are disabled.
 *
 * @param {any} value
 * @returns {string}
 */
const stripAnsi = (value) => String(value).replace(/\u001b\[[0-9;]*m/g, "");

/**
 *  used for logging your terminal output in `ps-logger.log` file
 *
 *  use this method only once it will work globally to output all your logs in log file
 *
 * @param {boolean} fileLogging - it accepts a boolean value
 *
 * @param {string} fileName - it accepts a string value for file name,don't add extensions
 *
 * @default - false
 *
 */
const logToFile = (fileLogging = false, fileName = "ps-logger") => {
  if (fileLogging) {
    // Create a writable stream to the log file
    logStream = fs.createWriteStream(`./${fileName}.log`, { flags: "a" });

    fileLog = true;
  }
};

/** core method to log in console and file */
const log = (args) => {
  const message = colorToggle ? stripAnsi(args) : args;
  process.stdout.write(message + "\n");

  if (fileLog) {
    const message = stripAnsi(args);
    logStream.write(message + "\n");
  }
};

/** setting time in (HH:MM:SS) */
const getDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${colors.reset}${colors.fgGray}${colors.bright}${hours}:${minute}:${second} `;
};

/**
 * used for logging info messages
 *
 * @param {any} arg
 */
const info = (arg) => {
  log(
    `${colors.fgGreen}${colors.bright}[info]:` +
      getDate() +
      `${colors.reset}${colors.fgGreen}${arg}`,
  );
};

/**
 * used for logging warn messages
 *
 * @param {any} arg
 */
const warn = (arg) => {
  log(
    `${colors.fgYellow}${colors.bright}[warn]:${getDate()}` +
      `${colors.reset}${colors.fgYellow}${arg}`,
  );
};

/**
 * used for logging error messages
 *
 * @param {any} arg
 */
const error = (arg) => {
  log(
    `${colors.fgRed}${colors.bright}[error]:${getDate()}` +
      `${colors.reset}${colors.fgRed}${arg}`,
  );
};

/**
 * used for logging debug messages
 *
 * @param {any} arg
 */
const debug = (arg) => {
  log(
    `${colors.fgBlue}${colors.bright}[debug]:${getDate()}` +
      `${colors.reset}${colors.fgBlue}${arg}`,
  );
};

/**
 * used for logging silly messages
 *
 * @param {any} arg
 */
function silly(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    // Cycle through rainbowColors array based on index
    const color = rainbowColors[i % rainbowColors.length];
    result += `${color}${text[i]}`;
  }
  // log(result + colors.reset);
  log(
    `${colors.fgMagenta}${colors.bright}[silly]:${getDate()}` +
      `${colors.reset}${result + colors.reset}`,
  );
}

/**
 * used for logging verbose messages
 *
 * @param {any} arg
 */
const verbose = (arg) => {
  log(
    `${colors.fgCyan}${colors.bright}[verbose]:${getDate()}` +
      `${colors.reset}${colors.fgCyan}${arg}`,
  );
};

/**
 * used for logging prompt messages
 *
 * @param {any} arg
 */
const prompt = (arg) => {
  log(
    `${colors.fgGray}${colors.bright}[prompt]:${getDate()}` +
      `${colors.reset}${colors.fgGray}${arg}`,
  );
};

/**
 * used for logging magenta messages
 *
 * @param {string} arg
 */
const magenta = (arg) => {
  log(
    `${colors.fgMagenta}${colors.bright}[magenta]:${getDate()}` +
      `${colors.reset}${colors.fgMagenta}${arg}`,
  );
};

/**
 * @typedef {typeof colorsObj} ColorsObj
 */

/**
 * Scrolls text horizontally in the terminal.
 *
 * @param {string} arg
 * @param {keyof ColorsObj} [textColor="green"]
 * @returns {void}
 */
const scrollingText = (arg, textColor = "green") => {
  const text = arg;
  const terminalWidth = 80; // How wide you want the marquee display window to be
  let step = 0;

  const resolvedColor = colorsObj[textColor];

  // ANSI codes
  const CLEAR_LINE = "\x1b[2K";
  const CURSOR_TO_START = "\x1b[0G";
  const RESET = "\x1b[0m";

  // Hide the cursor so it doesn't blink annoyingly while updating
  process.stdout.write("\x1b[?25l");

  interval = setInterval(() => {
    // Generate the frame slice by looping the text string
    let displayFrame = "";
    for (let i = 0; i < terminalWidth; i++) {
      displayFrame += text[(step + i) % text.length];
    }

    // 1. Clear the current line
    // 2. Move cursor to column 0
    // 3. Print the color, frame, and reset
    process.stdout.write(
      `${CLEAR_LINE}${CURSOR_TO_START}${resolvedColor}[ ${displayFrame} ]${RESET}`,
    );

    step++;
  }, 100); // Updates every 100ms
};

// Close the log stream when you are done
// logStream.end();

// Gracefully show the cursor again if the user hits Ctrl+C to exit
// this is for scrollingText method
process.on("SIGINT", () => {
  clearInterval(interval);
  process.stdout.write("\x1b[?25h\n"); // Show cursor and move to next line
  process.exit();
});

module.exports = {
  info,
  warn,
  error,
  debug,
  silly,
  verbose,
  prompt,
  magenta,
  setColor,
  logToFile,
  colorsObj,
  scrollingText,
};
