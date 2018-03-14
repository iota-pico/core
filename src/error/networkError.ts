import { CoreError } from "./coreError";

/**
 * A network implementation of an error.
 */
export class NetworkError extends CoreError {
    /**
     * Create an instance of NetworkError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: { [id: string]: any }, innerError?: Error) {
        super(message, additional, innerError);
        this.domain = "Network";
    }
}
