import { CoreError } from "../error/coreError";
import { NumberHelper } from "../helpers/numberHelper";
import { ObjectHelper } from "../helpers/objectHelper";
import { StringHelper } from "../helpers/stringHelper";
import { INetworkEndPoint } from "../interfaces/INetworkEndPoint";
import { NetworkProtocol } from "../interfaces/networkProtocol";

/**
 * Default implementation of a network endpoint.
 */
export class NetworkEndPoint implements INetworkEndPoint {
    /* @internal */
    private readonly _protocol: NetworkProtocol;
    /* @internal */
    private readonly _host: string;
    /* @internal */
    private readonly _path: string;
    /* @internal */
    private readonly _port: number;

    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param path The path to the endpoint.
     * @param port The port of the endpoint.
     */
    constructor(protocol: NetworkProtocol, host: string, path: string, port: number) {
        if (!StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
            throw new CoreError("The protocol must be defined as http or https");
        }
        if (!StringHelper.isString(host)) {
            throw new CoreError("The host must be defined");
        }
        if (!NumberHelper.isInteger(port) || port <= 0) {
            throw new CoreError("The port must be a number greater than zero");
        }
        if (!ObjectHelper.isEmpty(path) && !StringHelper.isString(path)) {
            throw new CoreError("The path must be a valid string");
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
    public getProtocol(): NetworkProtocol {
        return this._protocol;
    }

    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    public getHost(): string {
        return this._host;
    }

    /**
     * The path to the endpoint.
     * @returns The path.
     */
    public getPath(): string {
        return this._path;
    }

    /**
     * The port of the endpoint.
     * @returns The port.
     */
    public getPort(): number {
        return this._port;
    }

    /**
     * The complete uri.
     * @returns The uri.
     */
    public getUri(): string {
        return `${this._protocol}://${this._host}:${this._port}/${this._path}`;
    }
}
