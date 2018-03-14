/**
 * A core implementation of an error.
 */
export declare class CoreError extends Error {
    /**
     * The domain of the error.
     */
    domain: string;
    /**
     * Additional details about the error.
     */
    additional?: {
        [id: string]: any;
    };
    /**
     * The inner error if there was one.
     */
    innerError?: Error;
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
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
