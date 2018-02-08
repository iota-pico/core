/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export abstract class FactoryBase<T> {
    /* @internal */
    private readonly _types: { [name: string]: () => T } = {};

    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    public register(name: string, typeConstructor: () => T): void {
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
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    public create(name: string): T {
        const instance = this.getInstance();
        if (instance._types[name]) {
            return instance._types[name]();
        } else {
            return undefined;
        }
    }

    /* @internal */
    protected abstract getInstance(): FactoryBase<T>;
}
