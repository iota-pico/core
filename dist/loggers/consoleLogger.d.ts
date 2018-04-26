import { ILogger } from "../interfaces/ILogger";
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
export declare class ConsoleLogger implements ILogger {
    /**
     * Create and instance of the console logger.
     * @param loggingObject The object to send all the logging to.
     * @returns A new instance of ConsoleLogger.
     */
    constructor(loggingObject?: Console);
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message: string, ...args: any[]): void;
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message: string, ...args: any[]): void;
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message: string, ...args: any[]): void;
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message: string, ...args: any[]): void;
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message: string, err?: any, ...args: any[]): void;
}
