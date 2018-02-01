/**
 * String helper methods
 */
export class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    public static isString(value: any): value is string {
        return value === null || value === undefined
            ? false : Object.prototype.toString.call(value) === "[object String]";
    }

    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */
    public static isAscii(value: string): boolean {
        return value === null || value === undefined
            ? false : /^[\x00-\xFF]*$/.test(value);
    }

    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    public static encodeNonASCII(value: string): string {
        return value.replace(/[\u007F-\uFFFF]/g, (chr) => `\\u${(`0000${chr.charCodeAt(0).toString(16)}`).substr(-4)}`);
    }

    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    public static decodeNonASCII(value: string): string {
        return value.replace(/\\u([\d\w]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16)));
    }
}
