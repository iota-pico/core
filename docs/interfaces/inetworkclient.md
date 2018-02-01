[@iota-pico/core](../README.md) > [INetworkClient](../interfaces/inetworkclient.md)



# Interface: INetworkClient


Represents a client for performing communication.
*__interface__*: 



## Methods
<a id="postjson"></a>

###  postJson

► **postJson**T,U(data: *`T`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [interfaces/INetworkClient.ts:14](https://github.com/iotaeco/iota-pico-core/blob/0bbb142/src/interfaces/INetworkClient.ts#L14)*



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


