const colors = require("colors");
const log = (args) => process.stdout.write(args+'\n')

//enabling and disabling color
/**
 * @param {Boolean} color 
 */
const setColor = (color = true) => { 
  color ? colors.enable() : colors.disable()
}

//setting theme
colors.setTheme({
    silly: 'rainbow',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

//setting time in (HH:MM:SS)
const date = new Date();
const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

/**
 * @param {String} arg 
 */
const info = (arg) => {
    log(colors.bold.green('[info]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.info);
}

/**
 * @param {String} arg 
 */
const warn = (arg) => {
    log(colors.bold.yellow('[warn]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.warn);
}

/**
 * @param {String} arg 
 */
const error = (arg) => {
    log(colors.bold.red('[error]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.error);
}

/**
 * @param {String} arg 
 */
const debug = (arg) => {
    log(colors.bold.blue('[debug]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.debug);
}

/**
 * @param {String} arg 
 */
const silly = (arg) => {
    log(colors.rainbow('[silly]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.silly);
}

/**
 * @param {String} arg 
 */
const verbose = (arg) => {
    log(colors.bold.cyan('[verbose]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.verbose);
}

/**
 * @param {String} arg 
 */
const prompt = (arg) => {
    log(colors.bold.grey('[prompt]:') + colors.bold.gray(` ${hours}:${minute}:${second} `) + `${arg}`.prompt);
}

module.exports={
  info,
  warn,
  error,
  debug,
  silly,
  verbose,
  prompt,
  setColor
}