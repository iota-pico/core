Object.defineProperty(exports, "__esModule", { value: true });
const networkError_1 = require("../error/networkError");
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
     * @param port The port of the endpoint.
     * @param rootPath The path to the endpoint.
     */
    constructor(protocol, host, port, rootPath) {
        if (!stringHelper_1.StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
            throw new networkError_1.NetworkError("The protocol must be defined as http or https");
        }
        if (!stringHelper_1.StringHelper.isString(host)) {
            throw new networkError_1.NetworkError("The host must be defined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(port) || port <= 0) {
            throw new networkError_1.NetworkError("The port must be a number greater than zero");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(rootPath) && !stringHelper_1.StringHelper.isString(rootPath)) {
            throw new networkError_1.NetworkError("The rootPath must be a valid string");
        }
        this._protocol = protocol;
        this._host = host.replace(/^\/*/, "").replace(/\/*$/, "");
        this._port = port;
        this._rootPath = (rootPath || "").replace(/^\/*/, "").replace(/\/*$/, "");
    }
    /**
     * The protocol to access the endpoint with.
     * @returns The protocol.
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
    getRootPath() {
        return this._rootPath;
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
        let uri = `${this._protocol}://${this._host}:${this._port}`;
        if (this._rootPath.length > 0) {
            uri += `/${this._rootPath}`;
        }
        return uri;
    }
}
exports.NetworkEndPoint = NetworkEndPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFJdkQ7O0dBRUc7QUFDSDtJQVVJOzs7Ozs7T0FNRztJQUNILFlBQVksUUFBeUIsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWlCO1FBQ2hGLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEUsTUFBTSxJQUFJLDJCQUFZLENBQUMsK0NBQStDLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksMkJBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDNUMsTUFBTSxJQUFJLDJCQUFZLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JFLE1BQU0sSUFBSSwyQkFBWSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU07UUFDVCxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQ0o7QUFqRkQsMENBaUZDIn0=