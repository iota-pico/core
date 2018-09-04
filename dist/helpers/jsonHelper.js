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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ25COzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBVSxFQUFFLFFBQTJDLEVBQUUsS0FBdUI7UUFDcEcsNENBQTRDO1FBQzVDLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBVyxFQUFFLFlBQWlCLEVBQUUsRUFBRTtZQUN4RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ2xGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDcEMsd0NBQXdDO29CQUN4QyxPQUFPO2lCQUNWO3FCQUFNO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFFRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBM0JELGdDQTJCQyJ9