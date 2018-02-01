/**
 * Number helper methods
 */
export class NumberHelper {
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    public static isInteger(value: any): value is Number {
        return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
}
