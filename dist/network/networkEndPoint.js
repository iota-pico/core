Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("../error/coreError");
const numberHelper_1 = require("../helpers/numberHelper");
const objectHelper_1 = require("../helpers/objectHelper");
const stringHelper_1 = require("../helpers/stringHelper");
/**
 * Default implementation of a network endpoint.
 */
class NetworkEndPoint {
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param path The path to the endpoint.
     * @param port The port of the endpoint.
     */
    constructor(protocol, host, path, port) {
        if (!stringHelper_1.StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
            throw new coreError_1.CoreError("The protocol must be defined as http or https");
        }
        if (!stringHelper_1.StringHelper.isString(host)) {
            throw new coreError_1.CoreError("The host must be defined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(port) || port <= 0) {
            throw new coreError_1.CoreError("The port must be a number greater than zero");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(path) && !stringHelper_1.StringHelper.isString(path)) {
            throw new coreError_1.CoreError("The path must be a valid string");
        }
        this._protocol = protocol;
        this._host = host.replace(/^\/*/, "").replace(/\/*$/, "");
        this._path = (path || "").replace(/^\/*/, "").replace(/\/*$/, "");
        this._port = port;
    }
    /**
     * The protocol to access the endpoint with.
     * @return The protocol.
     */
    getProtocol() {
        return this._protocol;
    }
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost() {
        return this._host;
    }
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getPath() {
        return this._path;
    }
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort() {
        return this._port;
    }
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri() {
        return `${this._protocol}://${this._host}:${this._port}/${this._path}`;
    }
}
exports.NetworkEndPoint = NetworkEndPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFJdkQ7O0dBRUc7QUFDSDtJQVVJOzs7Ozs7T0FNRztJQUNILFlBQVksUUFBeUIsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDM0UsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sSUFBSSxxQkFBUyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLHFCQUFTLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLElBQUkscUJBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVc7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU87UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0NBQ0o7QUEzRUQsMENBMkVDIn0=