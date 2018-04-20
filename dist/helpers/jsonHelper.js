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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0g7SUFDSTs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVUsRUFBRSxRQUEyQyxFQUFFLEtBQXVCO1FBQ3BHLDRDQUE0QztRQUM1QyxNQUFNLEtBQUssR0FBVSxFQUFFLENBQUM7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBRSxZQUFpQixFQUFFLEVBQUU7WUFDeEQsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNsRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLHdDQUF3QztvQkFDeEMsT0FBTztpQkFDVjtxQkFBTTtvQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1lBRUQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNqRSxDQUFDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQTNCRCxnQ0EyQkMifQ==