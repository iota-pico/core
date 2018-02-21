import { ObjectHelper } from "./objectHelper";

/**
 * Array helper methods.
 */
export class ArrayHelper {
    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    public static isArray(value: any): boolean {
        return value === null || value === undefined
            ? false : Array.isArray(value);
    }

    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */
    public static isEmpty(value: any): boolean {
        return !ArrayHelper.isArray(value) || value.length === 0;
    }

    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */
    public static isTyped(value: any, type: Function): boolean {
        return !ArrayHelper.isEmpty(value) &&
            !value.includes(undefined) &&
            !value.includes(null) &&
            value.every((a: any) => ObjectHelper.isType(a, type));
    }

}
