[@iota-pico/core](../README.md) > [NetworkClientFactory](../classes/networkclientfactory.md)

# Class: NetworkClientFactory

Factory to generate network clients.

## Hierarchy

 [FactoryBase](factorybase.md)<[INetworkClient](../interfaces/inetworkclient.md)>

**↳ NetworkClientFactory**

## Index

### Methods

* [create](networkclientfactory.md#create)
* [exists](networkclientfactory.md#exists)
* [getInstance](networkclientfactory.md#getinstance)
* [register](networkclientfactory.md#register)
* [types](networkclientfactory.md#types)
* [unregister](networkclientfactory.md#unregister)
* [instance](networkclientfactory.md#instance)

---

## Methods

<a id="create"></a>

###  create

▸ **create**(name: *`string`*, ...args: *`any`[]*): [INetworkClient](../interfaces/inetworkclient.md)

*Inherited from [FactoryBase](factorybase.md).[create](factorybase.md#create)*

*Defined in [factories/factoryBase.ts:50](https://github.com/iota-pico/core/tree/master/src/factories/factoryBase.ts#L50*

Create an instance of an object from the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to create. |
| `Rest` args | `any`[] |  Any parameters to pass to the constructor. |

**Returns:** [INetworkClient](../interfaces/inetworkclient.md)
A new instance of the type if it exists, or undefined if it does not.

___
<a id="exists"></a>

###  exists

▸ **exists**(name: *`string`*): `boolean`

*Inherited from [FactoryBase](factorybase.md).[exists](factorybase.md#exists)*

*Defined in [factories/factoryBase.ts:31](https://github.com/iota-pico/core/tree/master/src/factories/factoryBase.ts#L31*

Does the factory contain a specific type.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to look for. |

**Returns:** `boolean`
True if the type exists.

___
<a id="getinstance"></a>

### `<Protected>` getInstance

▸ **getInstance**(): [FactoryBase](factorybase.md)<[INetworkClient](../interfaces/inetworkclient.md)>

*Overrides [FactoryBase](factorybase.md).[getInstance](factorybase.md#getinstance)*

*Defined in [factories/networkClientFactory.ts:31](https://github.com/iota-pico/core/tree/master/src/factories/networkClientFactory.ts#L31*

**Returns:** [FactoryBase](factorybase.md)<[INetworkClient](../interfaces/inetworkclient.md)>

___
<a id="register"></a>

###  register

▸ **register**(name: *`string`*, typeConstructor: *`function`*): `void`

*Inherited from [FactoryBase](factorybase.md).[register](factorybase.md#register)*

*Defined in [factories/factoryBase.ts:14](https://github.com/iota-pico/core/tree/master/src/factories/factoryBase.ts#L14*

Register a new type with the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to register. |
| typeConstructor | `function` |  The constructor for the type. |

**Returns:** `void`

___
<a id="types"></a>

###  types

▸ **types**(): `string`[]

*Inherited from [FactoryBase](factorybase.md).[types](factorybase.md#types)*

*Defined in [factories/factoryBase.ts:40](https://github.com/iota-pico/core/tree/master/src/factories/factoryBase.ts#L40*

List the types in the factory.

**Returns:** `string`[]
True if the type exists.

___
<a id="unregister"></a>

###  unregister

▸ **unregister**(name: *`string`*): `void`

*Inherited from [FactoryBase](factorybase.md).[unregister](factorybase.md#unregister)*

*Defined in [factories/factoryBase.ts:22](https://github.com/iota-pico/core/tree/master/src/factories/factoryBase.ts#L22*

Unregister a type from the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to unregister. |

**Returns:** `void`

___
<a id="instance"></a>

### `<Static>` instance

▸ **instance**(): [FactoryBase](factorybase.md)<[INetworkClient](../interfaces/inetworkclient.md)>

*Defined in [factories/networkClientFactory.ts:23](https://github.com/iota-pico/core/tree/master/src/factories/networkClientFactory.ts#L23*

Get the instance of the factory.

**Returns:** [FactoryBase](factorybase.md)<[INetworkClient](../interfaces/inetworkclient.md)>
The factory instance.

___

