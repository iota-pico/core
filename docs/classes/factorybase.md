[@iota-pico/core](../README.md) > [FactoryBase](../classes/factorybase.md)



# Class: FactoryBase


Factory to generate types.

## Type parameters
#### T 

The generic type for the object types in the factory.

## Index

### Methods

* [create](factorybase.md#create)
* [getInstance](factorybase.md#getinstance)
* [register](factorybase.md#register)
* [unregister](factorybase.md#unregister)



---
## Methods
<a id="create"></a>

###  create

► **create**(name: *`string`*): `T`



*Defined in factories/factoryBase.ts:31*



Create an instance of an object from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to create. |





**Returns:** `T`
A new instance of the type if it exists, or undefined if it does not.






___

<a id="getinstance"></a>

### «Protected» getInstance

► **getInstance**(): [FactoryBase](factorybase.md)`T`



*Defined in factories/factoryBase.ts:41*





**Returns:** [FactoryBase](factorybase.md)`T`





___

<a id="register"></a>

###  register

► **register**(name: *`string`*, typeConstructor: *`function`*): `void`



*Defined in factories/factoryBase.ts:14*



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



*Defined in factories/factoryBase.ts:22*



Unregister a type from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to unregister. |





**Returns:** `void`





___


