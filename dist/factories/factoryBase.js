Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
class FactoryBase {
    constructor() {
        /* @internal */
        this._types = {};
    }
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name, typeConstructor) {
        this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name) {
        delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    exists(name) {
        return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    types() {
        return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name, ...args) {
        const instance = this.getInstance();
        if (instance._types[name]) {
            return instance._types[name](...args);
        }
        return undefined;
    }
}
exports.FactoryBase = FactoryBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeUJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7QUFDSCxNQUFzQixXQUFXO0lBQWpDO1FBQ0ksZUFBZTtRQUNFLFdBQU0sR0FBOEMsRUFBRSxDQUFDO0lBcUQ1RSxDQUFDO0lBbkRHOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsSUFBWSxFQUFFLGVBQXNDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSxVQUFVLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLElBQVksRUFBRSxHQUFHLElBQVc7UUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FJSjtBQXZERCxrQ0F1REMifQ==