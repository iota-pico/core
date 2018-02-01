"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Number helper methods
 */
class NumberHelper {
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    static isInteger(value) {
        return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
}
exports.NumberHelper = NumberHelper;
