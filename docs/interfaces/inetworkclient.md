[@iota-pico/core](../README.md) > [INetworkClient](../interfaces/inetworkclient.md)



# Interface: INetworkClient


Represents a client for performing communication.
*__interface__*: 



## Methods
<a id="get"></a>

###  get

► **get**(additionalHeaders?: *`object`*): `Promise`.<`string`>



*Defined in [interfaces/INetworkClient.ts:12](https://github.com/iotaeco/iota-pico-core/blob/a3ffcb1/src/interfaces/INetworkClient.ts#L12)*



Get data asynchronously.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.






___

<a id="getjson"></a>

###  getJson

► **getJson**U(additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [interfaces/INetworkClient.ts:28](https://github.com/iotaeco/iota-pico-core/blob/a3ffcb1/src/interfaces/INetworkClient.ts#L28)*



Get data as JSON asynchronously.


**Type parameters:**

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.






___

<a id="post"></a>

###  post

► **post**(data: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`string`>



*Defined in [interfaces/INetworkClient.ts:20](https://github.com/iotaeco/iota-pico-core/blob/a3ffcb1/src/interfaces/INetworkClient.ts#L20)*



Post data asynchronously.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to send. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.






___

<a id="postjson"></a>

###  postJson

► **postJson**T,U(data: *`T`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [interfaces/INetworkClient.ts:38](https://github.com/iotaeco/iota-pico-core/blob/a3ffcb1/src/interfaces/INetworkClient.ts#L38)*



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
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.






___


