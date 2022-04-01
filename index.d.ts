/**
 * @name ps-logger
 * @namespace ps-logger
 * @description ps-logger is a production grade logger, basically it is used for logging info,warning,error,silly,verbose and debug statements
 * @version 1.0.5
 * @author shivansh patel <shivanshpatel.1999@gmail.com>
 * @license MIT
 * @example info('Hello World!');
 */

export function debug(arg: any);
export function error(arg: any);
export function info(arg: any);
export function prompt(arg: any);
export function setColor(color: Boolean);
export function silly(arg: any);
export function verbose(arg: any);
export function warn(arg: any);