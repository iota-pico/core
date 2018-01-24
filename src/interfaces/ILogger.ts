/**
 * Represents a logging object.
 * @interface
 */
export interface ILogger {
    /**
     * Add information to the logger.
     * @param message The main message to log
     * @param args Any additional information to log
     */
    info(message: string, args?: { [id: string]: any }): void;

    /**
     * Add warning to the logger.
     * @param message The main message to log
     * @param args Any additional information to log
     */
    warning(message: string, args?: { [id: string]: any }): void;

    /**
     * Add error to the logger.
     * @param message The main message to log
     * @param err An error object e.g. exception/error/string
     * @param args Any additional information to log
     */
    error(message: string, err?: any, args?: { [id: string]: any }): void;
}
