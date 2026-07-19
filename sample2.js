const {
  info,
  warn,
  error,
  setColor,
  debug,
  prompt,
  verbose,
  silly,
  magenta,
} = require("./index");

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
// setColor(false);
info("hi everyone ");
warn("warn log");
error("error log");
debug("debug log");
verbose("verbose log");
magenta("magneta log");
silly("silly color");
// debug("debug log");
// prompt("prompt log");
// verbose("verbose log");
// silly("silly log");

console.log(`${colors.fgGreen}${colors.bright}[info]:`);
console.log(`${colors.fgYellow}${colors.bright}[warn]:`);
console.log(
  `${colors.fgRed}${colors.bright}[error]:`,
  `${colors.reset}${colors.fgRed}hi`,
);
console.log(`${colors.fgBlue}${colors.bright}[debug]:`);
console.log(`${colors.fgGray}${colors.bright}[debug]:`);
console.log(`${colors.fgCyan}${colors.bright}[verbose]:`);
console.log(`${colors.fgMagenta}${colors.bright}[magneta]:`);

// const info = (arg) => {
//   log(
//     colors.bold.green("[info]:") + colors.bold.gray(getDate()) + ` ${arg}`.info
//   );
// };

const rainbowColors = [
  "\x1b[31m", // Red
  "\x1b[33m", // Yellow (Closest to Orange)
  "\x1b[93m", // Bright Yellow
  "\x1b[32m", // Green
  "\x1b[34m", // Blue
  "\x1b[35m", // Magenta (Indigo/Violet)
  "\x1b[36m", // Cyan
];

const reset = "\x1b[0m";

function logRainbow(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    // Cycle through rainbowColors array based on index
    const color = rainbowColors[i % rainbowColors.length];
    result += `${color}${text[i]}`;
  }
  console.log(result + reset);
}

logRainbow("Node.js Rainbow Output!");
logRainbow("||||||||||||||||||||||||");
