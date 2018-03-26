/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export declare abstract class FactoryBase<T> {
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name: string, typeConstructor: (...args: any[]) => T): void;
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name: string): void;
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    exists(name: string): boolean;
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    types(): string[];
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name: string, ...args: any[]): T;
}
