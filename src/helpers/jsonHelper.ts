/**
 * Json helper methods.
 */
export class JsonHelper {
    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    public static stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string {
        // eliminates any recursion in the stringify
        const cache: any[] = [];

        const recusionReplacer = (key: string, replaceValue: any) => {
            if (typeof replaceValue === "object" && value !== null && replaceValue !== undefined) {
                if (cache.indexOf(replaceValue) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                cache.push(replaceValue);
            }

            return replacer ? replacer(key, replaceValue) : replaceValue;
        };

        return JSON.stringify(value, recusionReplacer, space);
    }
}
