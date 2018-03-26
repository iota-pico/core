/**
 * Number helper methods.
 */
export class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    public static isInteger(value: any): value is Number {
        return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }

    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    public static isNumber(value: any): value is Number {
        return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }

    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    public static isFloatString(value: string): boolean {
        return /^-?\d*\.?\d+$/.test(value);
    }

    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    public static isIntegerString(value: string): boolean {
        return /^-?\d+$/.test(value);
    }
}
