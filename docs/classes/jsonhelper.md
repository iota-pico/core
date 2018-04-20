[@iota-pico/core](../README.md) > [JsonHelper](../classes/jsonhelper.md)

# Class: JsonHelper

Json helper methods.

## Hierarchy

**JsonHelper**

## Index

### Methods

* [stringify](jsonhelper.md#stringify)

---

## Methods

<a id="stringify"></a>

### `<Static>` stringify

▸ **stringify**(value: *`any`*, replacer?: *`function`*, space?: *`string`⎮`number`*): `string`

*Defined in [helpers/jsonHelper.ts:12](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/helpers/jsonHelper.ts#L12)*

Stringify an object with recursion breaking.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any`   |  A JavaScript value, usually an object or array, to be converted. |
| replacer | `function`   |  A function that transforms the results. |
| space | `string`⎮`number`   |  Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

**Returns:** `string`
String version of the object.

___

