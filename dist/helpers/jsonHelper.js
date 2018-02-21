Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Json helper methods.
 */
class JsonHelper {
    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    static stringify(value, replacer, space) {
        // eliminates any recursion in the stringify
        const cache = [];
        const recusionReplacer = (key, replaceValue) => {
            if (typeof replaceValue === "object" && value !== null && replaceValue !== undefined) {
                if (cache.indexOf(replaceValue) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                else {
                    cache.push(replaceValue);
                }
            }
            return replacer ? replacer(key, replaceValue) : replaceValue;
        };
        return JSON.stringify(value, recusionReplacer, space);
    }
}
exports.JsonHelper = JsonHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0g7SUFDSTs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVUsRUFBRSxRQUEyQyxFQUFFLEtBQXVCO1FBQ3BHLDRDQUE0QztRQUM1QyxNQUFNLEtBQUssR0FBVSxFQUFFLENBQUM7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBRSxZQUFpQixFQUFFLEVBQUU7WUFDeEQsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyx3Q0FBd0M7b0JBQ3hDLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUEzQkQsZ0NBMkJDIn0=