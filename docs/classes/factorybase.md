[@iota-pico/core](../README.md) > [FactoryBase](../classes/factorybase.md)



# Class: FactoryBase


Factory to generate types.

## Type parameters
#### T 

The generic type for the object types in the factory.

## Hierarchy

**FactoryBase**

↳  [NetworkClientFactory](networkclientfactory.md)








## Index

### Methods

* [create](factorybase.md#create)
* [exists](factorybase.md#exists)
* [getInstance](factorybase.md#getinstance)
* [register](factorybase.md#register)
* [unregister](factorybase.md#unregister)



---
## Methods
<a id="create"></a>

###  create

► **create**(name: *`string`*, ...args: *`any`[]*): `T`



*Defined in [factories/factoryBase.ts:41](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/factories/factoryBase.ts#L41)*



Create an instance of an object from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to create. |
| args | `any`[]   |  Any parameters to pass to the constructor. |





**Returns:** `T`
A new instance of the type if it exists, or undefined if it does not.






___

<a id="exists"></a>

###  exists

► **exists**(name: *`string`*): `boolean`



*Defined in [factories/factoryBase.ts:31](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/factories/factoryBase.ts#L31)*



Does the factory contain a specific type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to look for. |





**Returns:** `boolean`
True if the type exists.






___

<a id="getinstance"></a>

### «Protected»«Abstract» getInstance

► **getInstance**(): [FactoryBase](factorybase.md)`T`



*Defined in [factories/factoryBase.ts:51](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/factories/factoryBase.ts#L51)*





**Returns:** [FactoryBase](factorybase.md)`T`





___

<a id="register"></a>

###  register

► **register**(name: *`string`*, typeConstructor: *`function`*): `void`



*Defined in [factories/factoryBase.ts:14](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/factories/factoryBase.ts#L14)*



Register a new type with the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to register. |
| typeConstructor | `function`   |  The constructor for the type. |





**Returns:** `void`





___

<a id="unregister"></a>

###  unregister

► **unregister**(name: *`string`*): `void`



*Defined in [factories/factoryBase.ts:22](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/factories/factoryBase.ts#L22)*



Unregister a type from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to unregister. |





**Returns:** `void`





___


