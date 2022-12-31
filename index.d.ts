/**
 * @name ps-logger
 * @namespace ps-logger
 * @description ps-logger is a production grade logger, basically it is used for logging info,warning,error,silly,verbose and debug statements
 * @version 1.0.7
 * @author shivansh patel <shivanshpatel.1999@gmail.com>
 * @license MIT
 * @example info('Hello World!');
 */

/**
 * used for logging debug messages
 *
 * @param {any} arg
 */
export function debug(arg: any);

/**
 * used for logging error messages
 *
 * @param {any} arg
 */
export function error(arg: any);

/**
 * used for logging info messages
 *
 * @param {any} arg
 */
export function info(arg: any);

/**
 * used for logging prompt messages
 *
 * @param {any} arg
 */
export function prompt(arg: any);

/**
 * `setColor` method is used for turning colors on and off
 *
 * @param {boolean} color - it accepts a boolean value
 */
export function setColor(color: boolean): void;

/**
 *  used for logging your terminal output in `ps-logger.log` file
 *
 *  use this method only once it will work globally to output all your logs in log file
 *
 *  if `logToFile` is set to `true` then all the logs appear without `colors` in console
 *
 * @default false
 * @param {boolean} fileLogging - it accepts a boolean value
 */
export function logToFile(fileLogging: boolean): void;

/**
 * used for logging silly messages
 *
 * @param {any} arg
 */
export function silly(arg: any);

/**
 * used for logging verbose messages
 *
 * @param {any} arg
 */
export function verbose(arg: any);

/**
 * used for logging warn messages
 *
 * @param {any} arg
 */
export function warn(arg: any);
