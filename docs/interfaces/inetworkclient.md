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
* [getJson](inetworkclient.md#getjson)
* [post](inetworkclient.md#post)
* [postJson](inetworkclient.md#postjson)

---

## Methods

<a id="dorequest"></a>

###  doRequest

▸ **doRequest**(method: *`string`*, data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:51](https://github.com/iota-pico/core/blob/561586d/src/interfaces/INetworkClient.ts#L51)*

Perform a request asynchronously.

**Parameters:**

| Param | Type | Description |
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

▸ **get**(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:12](https://github.com/iota-pico/core/blob/561586d/src/interfaces/INetworkClient.ts#L12)*

Get data asynchronously.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="getjson"></a>

###  getJson

▸ **getJson**U(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`U`>

*Defined in [interfaces/INetworkClient.ts:30](https://github.com/iota-pico/core/blob/561586d/src/interfaces/INetworkClient.ts#L30)*

Get data as JSON asynchronously.

**Type parameters:**

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`U`>
Promise which resolves to the object returned or rejects with error.

___
<a id="post"></a>

###  post

▸ **post**(data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [interfaces/INetworkClient.ts:21](https://github.com/iota-pico/core/blob/561586d/src/interfaces/INetworkClient.ts#L21)*

Post data asynchronously.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="postjson"></a>

###  postJson

▸ **postJson**T,U(data: *`T`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`U`>

*Defined in [interfaces/INetworkClient.ts:41](https://github.com/iota-pico/core/blob/561586d/src/interfaces/INetworkClient.ts#L41)*

Post data as JSON asynchronously.

**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `T` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`U`>
Promise which resolves to the object returned or rejects with error.

___

