/**
 * Object helper methods.
 */
export declare class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    static isObject(value: any): value is Object;
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */
    static isType(value: any, typeConstructor: Function): boolean;
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    static getClassName(object: any): string;
}
