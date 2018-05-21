[@iota-pico/core](../README.md) > [ObjectHelper](../classes/objecthelper.md)

# Class: ObjectHelper

Object helper methods.

## Hierarchy

**ObjectHelper**

## Index

### Methods

* [getClassName](objecthelper.md#getclassname)
* [isEmpty](objecthelper.md#isempty)
* [isObject](objecthelper.md#isobject)
* [isType](objecthelper.md#istype)

---

## Methods

<a id="getclassname"></a>

### `<Static>` getClassName

▸ **getClassName**(object: *`any`*): `string`

*Defined in [helpers/objectHelper.ts:40](https://github.com/iota-pico/core/blob/561586d/src/helpers/objectHelper.ts#L40)*

Get the class name of an object if it has one.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| object | `any` |  The object to get the class name for. |

**Returns:** `string`
The class name if it has one or undefined if not.

___
<a id="isempty"></a>

### `<Static>` isEmpty

▸ **isEmpty**(value: *`any`*): `boolean`

*Defined in [helpers/objectHelper.ts:10](https://github.com/iota-pico/core/blob/561586d/src/helpers/objectHelper.ts#L10)*

Is the value empty.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |

**Returns:** `boolean`
True if the value is empty.

___
<a id="isobject"></a>

### `<Static>` isObject

▸ **isObject**(value: *`any`*): `boolean`

*Defined in [helpers/objectHelper.ts:19](https://github.com/iota-pico/core/blob/561586d/src/helpers/objectHelper.ts#L19)*

Is the value an object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |

**Returns:** `boolean`
True if the value is an object.

___
<a id="istype"></a>

### `<Static>` isType

▸ **isType**(value: *`any`*, typeConstructor: *`Function`*): `boolean`

*Defined in [helpers/objectHelper.ts:30](https://github.com/iota-pico/core/blob/561586d/src/helpers/objectHelper.ts#L30)*

Is the value an object if given type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |
| typeConstructor | `Function` |  A callback method which returns an instance of the object. |

**Returns:** `boolean`
True if the value is an object of the specified type.

___

