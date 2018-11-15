[@iota-pico/core](../README.md) > [NetworkEndPoint](../classes/networkendpoint.md)

# Class: NetworkEndPoint

Default implementation of a network endpoint.

## Hierarchy

**NetworkEndPoint**

## Implements

* [INetworkEndPoint](../interfaces/inetworkendpoint.md)

## Index

### Constructors

* [constructor](networkendpoint.md#constructor)

### Methods

* [getHost](networkendpoint.md#gethost)
* [getPort](networkendpoint.md#getport)
* [getProtocol](networkendpoint.md#getprotocol)
* [getRootPath](networkendpoint.md#getrootpath)
* [getUri](networkendpoint.md#geturi)
* [fromUri](networkendpoint.md#fromuri)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NetworkEndPoint**(protocol: *[NetworkProtocol](../#networkprotocol)*, host: *`string`*, port: *`number`*, rootPath?: *`string`*): [NetworkEndPoint](networkendpoint.md)

*Defined in [network/networkEndPoint.ts:19](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L19*

Create an instance of NetworkEndPoint.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| protocol | [NetworkProtocol](../#networkprotocol) |  The protocol to access the endpoint with. |
| host | `string` |  The host name or ip of the endpoint. |
| port | `number` |  The port of the endpoint. |
| `Optional` rootPath | `string` |  The path to the endpoint. |

**Returns:** [NetworkEndPoint](networkendpoint.md)

___

## Methods

<a id="gethost"></a>

###  getHost

▸ **getHost**(): `string`

*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getHost](../interfaces/inetworkendpoint.md#gethost)*

*Defined in [network/networkEndPoint.ts:82](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L82*

The host name or ip of the endpoint.

**Returns:** `string`
The host.

___
<a id="getport"></a>

###  getPort

▸ **getPort**(): `number`

*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getPort](../interfaces/inetworkendpoint.md#getport)*

*Defined in [network/networkEndPoint.ts:98](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L98*

The port of the endpoint.

**Returns:** `number`
The port.

___
<a id="getprotocol"></a>

###  getProtocol

▸ **getProtocol**(): [NetworkProtocol](../#networkprotocol)

*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getProtocol](../interfaces/inetworkendpoint.md#getprotocol)*

*Defined in [network/networkEndPoint.ts:74](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L74*

The protocol to access the endpoint with.

**Returns:** [NetworkProtocol](../#networkprotocol)
The protocol.

___
<a id="getrootpath"></a>

###  getRootPath

▸ **getRootPath**(): `string`

*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getRootPath](../interfaces/inetworkendpoint.md#getrootpath)*

*Defined in [network/networkEndPoint.ts:90](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L90*

The path to the endpoint.

**Returns:** `string`
The path.

___
<a id="geturi"></a>

###  getUri

▸ **getUri**(): `string`

*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getUri](../interfaces/inetworkendpoint.md#geturi)*

*Defined in [network/networkEndPoint.ts:106](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L106*

The complete uri.

**Returns:** `string`
The uri.

___
<a id="fromuri"></a>

### `<Static>` fromUri

▸ **fromUri**(uri: *`string`*): [INetworkEndPoint](../interfaces/inetworkendpoint.md)

*Defined in [network/networkEndPoint.ts:52](https://github.com/iota-pico/core/tree/master/src/network/networkEndPoint.ts#L52*

Create a network endpoint by parsing a uri.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  The uri to parse. |

**Returns:** [INetworkEndPoint](../interfaces/inetworkendpoint.md)
The network endpoint.

___

