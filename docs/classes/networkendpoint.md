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
* [getPath](networkendpoint.md#getpath)
* [getPort](networkendpoint.md#getport)
* [getProtocol](networkendpoint.md#getprotocol)
* [getUri](networkendpoint.md#geturi)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new NetworkEndPoint**(protocol: *[NetworkProtocol](../#networkprotocol)*, host: *`string`*, path: *`string`*, port: *`number`*): [NetworkEndPoint](networkendpoint.md)


*Defined in [network/networkEndPoint.ts:12](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L12)*



Create an instance of NetworkEndPoint.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| protocol | [NetworkProtocol](../#networkprotocol)   |  The protocol to access the endpoint with. |
| host | `string`   |  The host name or ip of the endpoint. |
| path | `string`   |  The path to the endpoint. |
| port | `number`   |  The port of the endpoint. |





**Returns:** [NetworkEndPoint](networkendpoint.md)

---


## Methods
<a id="gethost"></a>

###  getHost

► **getHost**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getHost](../interfaces/inetworkendpoint.md#gethost)*

*Defined in [network/networkEndPoint.ts:46](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L46)*



The host name or ip of the endpoint.




**Returns:** `string`
The host.






___

<a id="getpath"></a>

###  getPath

► **getPath**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getPath](../interfaces/inetworkendpoint.md#getpath)*

*Defined in [network/networkEndPoint.ts:54](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L54)*



The path to the endpoint.




**Returns:** `string`
The path.






___

<a id="getport"></a>

###  getPort

► **getPort**(): `number`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getPort](../interfaces/inetworkendpoint.md#getport)*

*Defined in [network/networkEndPoint.ts:62](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L62)*



The port of the endpoint.




**Returns:** `number`
The port.






___

<a id="getprotocol"></a>

###  getProtocol

► **getProtocol**(): [NetworkProtocol](../#networkprotocol)



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getProtocol](../interfaces/inetworkendpoint.md#getprotocol)*

*Defined in [network/networkEndPoint.ts:38](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L38)*



The protocol to access the endpoint with.




**Returns:** [NetworkProtocol](../#networkprotocol)
The protocol.






___

<a id="geturi"></a>

###  getUri

► **getUri**(): `string`



*Implementation of [INetworkEndPoint](../interfaces/inetworkendpoint.md).[getUri](../interfaces/inetworkendpoint.md#geturi)*

*Defined in [network/networkEndPoint.ts:70](https://github.com/iotaeco/iota-pico-core/blob/cbca082/src/network/networkEndPoint.ts#L70)*



The complete uri.




**Returns:** `string`
The uri.






___


