[@iota-pico/core](../README.md) > [INetworkClient](../interfaces/inetworkclient.md)



# Interface: INetworkClient


Represents a client for performing communication.
*__interface__*: 



## Methods
<a id="get"></a>

###  get

► **get**(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`string`>



*Defined in [interfaces/INetworkClient.ts:12](https://github.com/iotaeco/iota-pico-core/blob/060c306/src/interfaces/INetworkClient.ts#L12)*



Get data asynchronously.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.






___

<a id="getjson"></a>

###  getJson

► **getJson**U(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [interfaces/INetworkClient.ts:30](https://github.com/iotaeco/iota-pico-core/blob/060c306/src/interfaces/INetworkClient.ts#L30)*



Get data as JSON asynchronously.


**Type parameters:**

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.






___

<a id="post"></a>

###  post

► **post**(data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`string`>



*Defined in [interfaces/INetworkClient.ts:21](https://github.com/iotaeco/iota-pico-core/blob/060c306/src/interfaces/INetworkClient.ts#L21)*



Post data asynchronously.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to send. |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.






___

<a id="postjson"></a>

###  postJson

► **postJson**T,U(data: *`T`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [interfaces/INetworkClient.ts:41](https://github.com/iotaeco/iota-pico-core/blob/060c306/src/interfaces/INetworkClient.ts#L41)*



Post data as JSON asynchronously.


**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `T`   |  The data to send. |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.






___


