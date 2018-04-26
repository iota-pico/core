[@iota-pico/core](../README.md) > [ErrorHelper](../classes/errorhelper.md)

# Class: ErrorHelper

Handle errors as gracefully as possible.

## Hierarchy

**ErrorHelper**

## Index

### Methods

* [format](errorhelper.md#format)

---

## Methods

<a id="format"></a>

### `<Static>` format

▸ **format**(err: *`any`*, includeStack: *`boolean`*): `string`

*Defined in [helpers/errorHelper.ts:16](https://github.com/iota-pico/core/blob/35412fd/src/helpers/errorHelper.ts#L16)*

Format an error object into something readable.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| err | `any`   |  The object to format. |
| includeStack | `boolean`   |  Include the stack trace if there is one. |

**Returns:** `string`
Formatted version of the error object.

___

