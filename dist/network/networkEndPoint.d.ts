import { INetworkEndPoint } from "../interfaces/INetworkEndPoint";
import { NetworkProtocol } from "../interfaces/networkProtocol";
/**
 * Default implementation of a network endpoint.
 */
export declare class NetworkEndPoint implements INetworkEndPoint {
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param port The port of the endpoint.
     * @param rootPath The path to the endpoint.
     */
    constructor(protocol: NetworkProtocol, host: string, port: number, rootPath?: string);
    /**
     * Create a network endpoint by parsing a uri.
     * @param uri The uri to parse.
     * @returns The network endpoint.
     */
    static fromUri(uri: string): INetworkEndPoint;
    /**
     * The protocol to access the endpoint with.
     * @returns The protocol.
     */
    getProtocol(): NetworkProtocol;
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost(): string;
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getRootPath(): string;
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort(): number;
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri(): string;
}
