/**
 * @name ps-logger
 * @namespace ps-logger
 * @description ps-logger is a production grade logger, basically it is used for logging info,warning,error,silly,verbose and debug statements
 * @version 1.0.1
 * @author shivansh patel <shivanshpatel.1999@gmail.com>
 * @license MIT
 * @example info('Hello World!');
 */

export function debug(arg: String);
export function error(arg: String);
export function info(arg: String);
export function prompt(arg: String);
export function setColor(color: Boolean);
export function silly(arg: String);
export function verbose(arg: String);
export function warn(arg: String);