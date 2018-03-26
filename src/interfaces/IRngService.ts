/**
 * Represents a service to perform random number generation.
 * @interface
 */
export interface IRngService {
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    generate(length: number): Uint8Array;
}
