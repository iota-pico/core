[@iota-pico/core](../README.md) > [NetworkEndPoint](../classes/networkendpoint.md)



# Class: NetworkEndPoint


Default implementation of a network endpoint.

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



---
## Constructors
<a id="constructor"></a>


### ⊕ **new NetworkEndPoint**(protocol: *[NetworkProtocol](../#networkprotocol)*, host: *`string`*, port: *`number`*, rootPath?: *`string`*): [NetworkEndPoint](networkendpoint.md)


*Defined in [network/networkEndPoint.ts:19](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L19)*



Create an instance of NetworkEndPoint.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| protocol | [NetworkProtocol](../#networkprotocol)   |  The protocol to access the endpoint with. |
| host | `string`   |  The host name or ip of the endpoint. |
| port | `number`   |  The port of the endpoint. |
| rootPath | `string`   |  The path to the endpoint. |





**Returns:** [NetworkEndPoint](networkendpoint.md)

---


## Methods
<a id="gethost"></a>

###  getHost

► **getHost**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getHost](../interfaces/inetworkendpoint.md#gethost)*

*Defined in [network/networkEndPoint.ts:59](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L59)*



The host name or ip of the endpoint.




**Returns:** `string`
The host.






___

<a id="getport"></a>

###  getPort

► **getPort**(): `number`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getPort](../interfaces/inetworkendpoint.md#getport)*

*Defined in [network/networkEndPoint.ts:75](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L75)*



The port of the endpoint.




**Returns:** `number`
The port.






___

<a id="getprotocol"></a>

###  getProtocol

► **getProtocol**(): [NetworkProtocol](../#networkprotocol)



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getProtocol](../interfaces/inetworkendpoint.md#getprotocol)*

*Defined in [network/networkEndPoint.ts:51](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L51)*



The protocol to access the endpoint with.




**Returns:** [NetworkProtocol](../#networkprotocol)
The protocol.






___

<a id="getrootpath"></a>

###  getRootPath

► **getRootPath**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getRootPath](../interfaces/inetworkendpoint.md#getrootpath)*

*Defined in [network/networkEndPoint.ts:67](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L67)*



The path to the endpoint.




**Returns:** `string`
The path.






___

<a id="geturi"></a>

###  getUri

► **getUri**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getUri](../interfaces/inetworkendpoint.md#geturi)*

*Defined in [network/networkEndPoint.ts:83](https://github.com/iotaeco/iota-pico-core/blob/96a402e/src/network/networkEndPoint.ts#L83)*



The complete uri.




**Returns:** `string`
The uri.






___


