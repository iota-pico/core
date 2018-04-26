Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object helper methods.
 */
class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    static isEmpty(value) {
        return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    static isObject(value) {
        return value === null || value === undefined
            ? false : typeof (value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */
    static isType(value, typeConstructor) {
        const valueClassName = ObjectHelper.getClassName(value);
        return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    static getClassName(object) {
        if (object === null || object === undefined) {
            return undefined;
        }
        else {
            const constructor = typeof object === "function" ? object.toString() : object.constructor.toString();
            const results = constructor.match(/\w+/g);
            return (results && results.length > 1) ? results[1] : undefined;
        }
    }
}
exports.ObjectHelper = ObjectHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0SGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNIO0lBQ0k7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBVTtRQUM1QixPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUM3QixPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVM7WUFDeEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFVLEVBQUUsZUFBeUI7UUFDdEQsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPLGNBQWMsS0FBSyxTQUFTLElBQUksY0FBYyxLQUFLLFlBQVksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQVc7UUFDbEMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDcEI7YUFBTTtZQUNILE1BQU0sV0FBVyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JHLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNuRTtJQUNMLENBQUM7Q0FDSjtBQTdDRCxvQ0E2Q0MifQ==