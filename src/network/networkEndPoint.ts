import { NetworkError } from "../error/networkError";
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
    private readonly _port: number;
    /* @internal */
    private readonly _rootPath: string;

    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param port The port of the endpoint.
     * @param rootPath The path to the endpoint.
     */
    constructor(protocol: NetworkProtocol, host: string, port: number, rootPath?: string) {
        if (!StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
            throw new NetworkError("The protocol must be defined as http or https");
        }
        if (!StringHelper.isString(host)) {
            throw new NetworkError("The host must be defined");
        }
        if (!NumberHelper.isInteger(port) || port <= 0) {
            throw new NetworkError("The port must be a number greater than zero");
        }
        if (!ObjectHelper.isEmpty(rootPath) && !StringHelper.isString(rootPath)) {
            throw new NetworkError("The rootPath must be a valid string");
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
    public getRootPath(): string {
        return this._rootPath;
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
        let uri = `${this._protocol}://${this._host}:${this._port}`;

        if (this._rootPath.length > 0) {
            uri += `/${this._rootPath}`;
        }

        return uri;
    }
}
