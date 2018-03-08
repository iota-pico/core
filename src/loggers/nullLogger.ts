import { ILogger } from "../interfaces/ILogger";

/**
 * Implementation of ILogger which is silent.
 */
export class NullLogger implements ILogger {
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public banner(message: string, ...args: any[]): void {
    }

    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public log(message: string, ...args: any[]): void {
    }

    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public info(message: string, ...args: any[]): void {
    }

    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public warning(message: string, ...args: any[]): void {
    }

    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    public error(message: string, err?: any, ...args: any[]): void {
    }
}
