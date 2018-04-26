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
     * @param loggingObject The object to send all the logging to.
     * @returns A new instance of ConsoleLogger.
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
            let output = "";
            args.forEach((arg, index) => {
                output += this.createItem(indent, "", arg);
                if (index < args.length - 1) {
                    output += `${indent}${"-".repeat(70)}\n`;
                }
            });
            logMethod(output);
        }
    }

    /* @internal */
    private createItem(indent: string, key: string, item: any, singleItemLineBreak: string = "\n"): string {
        let output = "";
        if (ArrayHelper.isArray(item)) {
            const newIndent = `${indent}\t`;
            if (StringHelper.isEmpty(key)) {
                output += `${indent}[\n`;
            } else {
                output += `${indent}${key}: [\n`;
            }
            item.forEach((element: any, index: number) => {
                output += this.createItem(newIndent, "", element, `${index < item.length - 1 ? "," : ""}\n`);
            });
            output += `${indent}]\n`;
        } else if (ObjectHelper.isObject(item)) {
            const obString = item.toString();

            if (obString === "[object Object]") {
                const newIndent = `${indent}\t`;
                if (StringHelper.isEmpty(key)) {
                    output += `${indent}{\n`;
                } else {
                    output += `${indent}${key}: {\n`;
                }
                const keys = Object.keys(item);
                keys.forEach((itemKey: string, index: number) => {
                    output += this.createItem(newIndent, itemKey, item[itemKey], `${index < keys.length - 1 ? "," : ""}\n`);
                });
                output += `${indent}}\n`;
            } else {
                output += this.createItem(indent, key, obString.replace(/\n/g, `\n${indent}`), singleItemLineBreak);
            }
        } else {
            if (StringHelper.isEmpty(key)) {
                output += `${indent}${ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            } else {
                output += `${indent}${key}: ${ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
        }
        return output;
    }
}
