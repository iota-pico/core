[@iota-pico/core](../README.md) > [RngServiceFactory](../classes/rngservicefactory.md)

# Class: RngServiceFactory

Factory to generate rng service.

## Hierarchy

 [FactoryBase](factorybase.md)[IRngService](../interfaces/irngservice.md)

**↳ RngServiceFactory**

## Index

### Methods

* [create](rngservicefactory.md#create)
* [exists](rngservicefactory.md#exists)
* [getInstance](rngservicefactory.md#getinstance)
* [register](rngservicefactory.md#register)
* [types](rngservicefactory.md#types)
* [unregister](rngservicefactory.md#unregister)
* [instance](rngservicefactory.md#instance)

---

## Methods

<a id="create"></a>

###  create

▸ **create**(name: *`string`*, ...args: *`any`[]*): [IRngService](../interfaces/irngservice.md)

*Inherited from [FactoryBase](factorybase.md).[create](factorybase.md#create)*

*Defined in [factories/factoryBase.ts:50](https://github.com/iota-pico/core/blob/86c99bb/src/factories/factoryBase.ts#L50)*

Create an instance of an object from the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to create. |
| args | `any`[]   |  Any parameters to pass to the constructor. |

**Returns:** [IRngService](../interfaces/irngservice.md)
A new instance of the type if it exists, or undefined if it does not.

___

<a id="exists"></a>

###  exists

▸ **exists**(name: *`string`*): `boolean`

*Inherited from [FactoryBase](factorybase.md).[exists](factorybase.md#exists)*

*Defined in [factories/factoryBase.ts:31](https://github.com/iota-pico/core/blob/86c99bb/src/factories/factoryBase.ts#L31)*

Does the factory contain a specific type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to look for. |

**Returns:** `boolean`
True if the type exists.

___

<a id="getinstance"></a>

### `<Protected>` getInstance

▸ **getInstance**(): [FactoryBase](factorybase.md)[IRngService](../interfaces/irngservice.md)

*Overrides [FactoryBase](factorybase.md).[getInstance](factorybase.md#getinstance)*

*Defined in [factories/rngServiceFactory.ts:31](https://github.com/iota-pico/core/blob/86c99bb/src/factories/rngServiceFactory.ts#L31)*

**Returns:** [FactoryBase](factorybase.md)[IRngService](../interfaces/irngservice.md)

___

<a id="register"></a>

###  register

▸ **register**(name: *`string`*, typeConstructor: *`function`*): `void`

*Inherited from [FactoryBase](factorybase.md).[register](factorybase.md#register)*

*Defined in [factories/factoryBase.ts:14](https://github.com/iota-pico/core/blob/86c99bb/src/factories/factoryBase.ts#L14)*

Register a new type with the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to register. |
| typeConstructor | `function`   |  The constructor for the type. |

**Returns:** `void`

___

<a id="types"></a>

###  types

▸ **types**(): `string`[]

*Inherited from [FactoryBase](factorybase.md).[types](factorybase.md#types)*

*Defined in [factories/factoryBase.ts:40](https://github.com/iota-pico/core/blob/86c99bb/src/factories/factoryBase.ts#L40)*

List the types in the factory.

**Returns:** `string`[]
True if the type exists.

___

<a id="unregister"></a>

###  unregister

▸ **unregister**(name: *`string`*): `void`

*Inherited from [FactoryBase](factorybase.md).[unregister](factorybase.md#unregister)*

*Defined in [factories/factoryBase.ts:22](https://github.com/iota-pico/core/blob/86c99bb/src/factories/factoryBase.ts#L22)*

Unregister a type from the factory.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to unregister. |

**Returns:** `void`

___

<a id="instance"></a>

### `<Static>` instance

▸ **instance**(): [FactoryBase](factorybase.md)[IRngService](../interfaces/irngservice.md)

*Defined in [factories/rngServiceFactory.ts:23](https://github.com/iota-pico/core/blob/86c99bb/src/factories/rngServiceFactory.ts#L23)*

Get the instance of the factory.

**Returns:** [FactoryBase](factorybase.md)[IRngService](../interfaces/irngservice.md)
The factory instance.

___

