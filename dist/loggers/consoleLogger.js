Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("../helpers/arrayHelper");
const errorHelper_1 = require("../helpers/errorHelper");
const objectHelper_1 = require("../helpers/objectHelper");
const stringHelper_1 = require("../helpers/stringHelper");
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console
class ConsoleLogger {
    /**
     * Create and instance of the console logger.
     * @param loggingObject The object to send all the logging to.
     * @returns A new instance of ConsoleLogger.
     */
    constructor(loggingObject) {
        this._loggingObject = loggingObject || console;
    }
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message, ...args) {
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
    log(message, ...args) {
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message, ...args) {
        this._loggingObject.info(message);
        this.logArgs(this._loggingObject.info, args);
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message, ...args) {
        this._loggingObject.warn(message);
        this.logArgs(this._loggingObject.warn, args);
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message, err, ...args) {
        this._loggingObject.error(message);
        if (!objectHelper_1.ObjectHelper.isEmpty(err)) {
            const lines = errorHelper_1.ErrorHelper.format(err, true).split("\n");
            lines.forEach(line => {
                this._loggingObject.error(`\t${line}`);
            });
        }
        this.logArgs(this._loggingObject.error, args);
    }
    /* @internal */
    logArgs(logMethod, args) {
        if (!arrayHelper_1.ArrayHelper.isEmpty(args)) {
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
    createItem(indent, key, item, singleItemLineBreak = "\n") {
        let output = "";
        if (arrayHelper_1.ArrayHelper.isArray(item)) {
            const newIndent = `${indent}\t`;
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}[\n`;
            }
            else {
                output += `${indent}${key}: [\n`;
            }
            item.forEach((element, index) => {
                output += this.createItem(newIndent, "", element, `${index < item.length - 1 ? "," : ""}\n`);
            });
            output += `${indent}]\n`;
        }
        else if (objectHelper_1.ObjectHelper.isObject(item)) {
            const obString = item.toString();
            if (obString === "[object Object]") {
                const newIndent = `${indent}\t`;
                if (stringHelper_1.StringHelper.isEmpty(key)) {
                    output += `${indent}{\n`;
                }
                else {
                    output += `${indent}${key}: {\n`;
                }
                const keys = Object.keys(item);
                keys.forEach((itemKey, index) => {
                    output += this.createItem(newIndent, itemKey, item[itemKey], `${index < keys.length - 1 ? "," : ""}\n`);
                });
                output += `${indent}}\n`;
            }
            else {
                output += this.createItem(indent, key, obString.replace(/\n/g, `\n${indent}`), singleItemLineBreak);
            }
        }
        else {
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
            else {
                output += `${indent}${key}: ${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
        }
        return output;
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL2NvbnNvbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdEQUFxRDtBQUNyRCx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUd2RDs7R0FFRztBQUNILDRCQUE0QjtBQUM1QjtJQUlJOzs7O09BSUc7SUFDSCxZQUFZLGFBQXVCO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxJQUFJLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO1FBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxJQUFJLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENB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