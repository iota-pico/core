[@iota-pico/core](../README.md) > [INetworkEndPoint](../interfaces/inetworkendpoint.md)

# Interface: INetworkEndPoint

Represents the configuration for a network endpoint.
*__interface__*: 

## Hierarchy

**INetworkEndPoint**

## Implemented by

* [NetworkEndPoint](../classes/networkendpoint.md)

## Index

### Methods

* [getHost](inetworkendpoint.md#gethost)
* [getPort](inetworkendpoint.md#getport)
* [getProtocol](inetworkendpoint.md#getprotocol)
* [getRootPath](inetworkendpoint.md#getrootpath)
* [getUri](inetworkendpoint.md#geturi)

---

## Methods

<a id="gethost"></a>

###  getHost

▸ **getHost**(): `string`

*Defined in [interfaces/INetworkEndPoint.ts:17](https://github.com/iota-pico/core/blob/35412fd/src/interfaces/INetworkEndPoint.ts#L17)*

The host name or ip of the endpoint.

**Returns:** `string`
The host.

___

<a id="getport"></a>

###  getPort

▸ **getPort**(): `number`

*Defined in [interfaces/INetworkEndPoint.ts:22](https://github.com/iota-pico/core/blob/35412fd/src/interfaces/INetworkEndPoint.ts#L22)*

The port of the endpoint.

**Returns:** `number`
The port.

___

<a id="getprotocol"></a>

###  getProtocol

▸ **getProtocol**(): [NetworkProtocol](../#networkprotocol)

*Defined in [interfaces/INetworkEndPoint.ts:12](https://github.com/iota-pico/core/blob/35412fd/src/interfaces/INetworkEndPoint.ts#L12)*

The protocol to access the endpoint with.

**Returns:** [NetworkProtocol](../#networkprotocol)
The protocol.

___

<a id="getrootpath"></a>

###  getRootPath

▸ **getRootPath**(): `string`

*Defined in [interfaces/INetworkEndPoint.ts:27](https://github.com/iota-pico/core/blob/35412fd/src/interfaces/INetworkEndPoint.ts#L27)*

The path to the endpoint.

**Returns:** `string`
The path.

___

<a id="geturi"></a>

###  getUri

▸ **getUri**(): `string`

*Defined in [interfaces/INetworkEndPoint.ts:32](https://github.com/iota-pico/core/blob/35412fd/src/interfaces/INetworkEndPoint.ts#L32)*

The complete uri.

**Returns:** `string`
The uri.

___

