/**
 * String helper methods
 */
export class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    public static isString(value: any): boolean {
        return value === null || value === undefined
            ? false : Object.prototype.toString.call(value) === "[object String]";
    }
}
