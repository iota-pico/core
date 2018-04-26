/**
 * Object helper methods.
 */
export class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    public static isEmpty(value: any): boolean {
        return value === null || value === undefined;
    }

    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    public static isObject(value: any): value is Object {
        return value === null || value === undefined
            ? false : typeof(value) === "object" && !Array.isArray(value);
    }

    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */
    public static isType(value: any, typeConstructor: Function): boolean {
        const valueClassName = ObjectHelper.getClassName(value);
        return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }

    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    public static getClassName(object: any): string {
        if (object === null || object === undefined) {
            return undefined;
        } else {
            const constructor = typeof object === "function" ? object.toString() : object.constructor.toString();
            const results = constructor.match(/\w+/g);
            return (results && results.length > 1) ? results[1] : undefined;
        }
    }
}
