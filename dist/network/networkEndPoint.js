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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFJdkQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFVeEI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxRQUF5QixFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsUUFBaUI7UUFDaEYsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsRSxNQUFNLElBQUksMkJBQVksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSwyQkFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM1QyxNQUFNLElBQUksMkJBQVksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckUsTUFBTSxJQUFJLDJCQUFZLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDL0I7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWpGRCwwQ0FpRkMifQ==