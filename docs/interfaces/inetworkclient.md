[@iota-pico/core](../README.md) > [INetworkClient](../interfaces/inetworkclient.md)

# Interface: INetworkClient

Represents a client for performing communication.

*__interface__*: 

## Hierarchy

**INetworkClient**

## Index

### Methods

* [doRequest](inetworkclient.md#dorequest)
* [get](inetworkclient.md#get)
* [json](inetworkclient.md#json)
* [post](inetworkclient.md#post)

---

## Methods

<a id="dorequest"></a>

###  doRequest

▸ **doRequest**(method: *`string`*, data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:46](https://github.com/iota-pico/core/tree/master/src/interfaces/INetworkClient.ts#L46*

Perform a request asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The method to send the data with. |
| data | `string` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="get"></a>

###  get

▸ **get**(data: *`object`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:15](https://github.com/iota-pico/core/tree/master/src/interfaces/INetworkClient.ts#L15*

Get data asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `object` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="json"></a>

###  json

▸ **json**<`T`,`U`>(data?: *`T`*, method?: *[NetworkMethod](../#networkmethod)*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`U`>

*Defined in [interfaces/INetworkClient.ts:36](https://github.com/iota-pico/core/tree/master/src/interfaces/INetworkClient.ts#L36*

Request data as JSON asynchronously.

**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` data | `T` |  The data to send as the JSON body. |
| `Optional` method | [NetworkMethod](../#networkmethod) |  The method to send with the request. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`U`>
Promise which resolves to the object returned or rejects with error.

___
<a id="post"></a>

###  post

▸ **post**(data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:24](https://github.com/iota-pico/core/tree/master/src/interfaces/INetworkClient.ts#L24*

Post data asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___

