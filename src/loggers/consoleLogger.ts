import { ArrayHelper } from "../helpers/arrayHelper";
import { ErrorHelper } from "../helpers/errorHelper";
import { ObjectHelper } from "../helpers/objectHelper";
import { StringHelper } from "../helpers/stringHelper";
import { ILogger } from "../interfaces/ILogger";

/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console
export class ConsoleLogger implements ILogger {
    /* @internal */
    private readonly _loggingObject: Console;

    /**
     * Create and instance of the console logger.
     */
    constructor(loggingObject?: Console) {
        this._loggingObject = loggingObject || console;
    }

    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public banner(message: string, ...args: any[]): void {
        this._loggingObject.log("=".repeat(80));
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
        this._loggingObject.log("=".repeat(80));
    }

    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public log(message: string, ...args: any[]): void {
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
    }

    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public info(message: string, ...args: any[]): void {
        this._loggingObject.info(message);
        this.logArgs(this._loggingObject.info, args);
    }

    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    public warning(message: string, ...args: any[]): void {
        this._loggingObject.warn(message);
        this.logArgs(this._loggingObject.warn, args);
    }

    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    public error(message: string, err?: any, ...args: any[]): void {
        this._loggingObject.error(message);
        if (!ObjectHelper.isEmpty(err)) {
            const lines = ErrorHelper.format(err, true).split("\n");
            lines.forEach(line => {
                this._loggingObject.error(`\t${line}`);
            });
        }
        this.logArgs(this._loggingObject.error, args);
    }

    /* @internal */
    private logArgs(logMethod: (message: string) => void, args: any[]): void {
        if (!ArrayHelper.isEmpty(args)) {
            const indent = "\t";
            if (args.length === 1) {
                if (!ObjectHelper.isEmpty(args[0])) {
                    this.logItem(indent, "", args[0], logMethod);
                }
            } else {
                args.forEach((arg, index) => {
                    this.logItem(indent, index.toString(), arg, logMethod);
                });
            }
        }
    }

    /* @internal */
    private logItem(indent: string, key: string, item: any, logMethod: (message: string) => void): void {
        if (ArrayHelper.isArray(item)) {
            const newIndent = `${indent}\t`;
            if (StringHelper.isEmpty(key)) {
                logMethod(`${indent} [`);
            } else {
                logMethod(`${indent}${key}: [`);
            }
            item.forEach((element: any, index: number) => {
                this.logItem(newIndent, "", element, logMethod);
            });
            logMethod(`${indent}]`);
        } else if (ObjectHelper.isObject(item)) {
            const newIndent = `${indent}\t`;
            if (StringHelper.isEmpty(key)) {
                logMethod(`${indent} {`);
            } else {
                logMethod(`${indent}${key}: {`);
            }
            for (const key2 in item) {
                this.logItem(newIndent, key2, item[key2], logMethod);
            }
            logMethod(`${indent}}`);
        } else {
            if (StringHelper.isEmpty(key)) {
                logMethod(`${indent}${item}`);
            } else {
                logMethod(`${indent}${key}: ${item}`);
            }
        }
    }
}
