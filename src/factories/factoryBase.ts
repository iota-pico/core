/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export abstract class FactoryBase<T> {
    /* @internal */
    private readonly _types: { [name: string]: (...args: any[]) => T } = {};

    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    public register(name: string, typeConstructor: (...args: any[]) => T): void {
        this.getInstance()._types[name] = typeConstructor;
    }

    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    public unregister(name: string): void {
        delete this.getInstance()._types[name];
    }

    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    public exists(name: string): boolean {
        return this.getInstance()._types[name] !== undefined;
    }

    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    public types(): string[] {
        return Object.keys(this.getInstance()._types);
    }

    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    public create(name: string, ...args: any[]): T {
        const instance = this.getInstance();
        if (instance._types[name]) {
            return instance._types[name](...args);
        } else {
            return undefined;
        }
    }

    /* @internal */
    protected abstract getInstance(): FactoryBase<T>;
}
