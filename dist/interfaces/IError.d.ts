/**
 * Represents an error.
 * @interface
 */
export interface IError {
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
}
