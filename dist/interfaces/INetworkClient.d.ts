import { IError } from "./IError";
/**
 * Represents a client for performing communication.
 * @interface
 */
export interface INetworkClient {
    /**
     * Post data asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    post<T, U>(data: T): Promise<U | IError>;
}
