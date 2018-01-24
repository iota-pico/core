import { IError } from "../index";
/**
 * A core implementation of an error.
 */
export declare class CoreError implements IError {
    /**
     * The message for the error.
     */
    message: string;
    /**
     * Additional details about the error.
     */
    additional?: {
        [id: string]: string;
    };
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     */
    constructor(message: string, additional?: {
        [id: string]: string;
    });
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj: any): obj is CoreError;
    /**
     * Format the error to a readable version.
     */
    format(): string;
}
