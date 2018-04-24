[@iota-pico/core](../README.md) > [PlatformError](../classes/platformerror.md)

# Class: PlatformError

A platform implementation of an error.

## Hierarchy

↳  [CoreError](coreerror.md)

**↳ PlatformError**

## Index

### Constructors

* [constructor](platformerror.md#constructor)

### Properties

* [additional](platformerror.md#additional)
* [domain](platformerror.md#domain)
* [innerError](platformerror.md#innererror)
* [message](platformerror.md#message)
* [name](platformerror.md#name)
* [stack](platformerror.md#stack)

### Methods

* [format](platformerror.md#format)
* [isError](platformerror.md#iserror)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new PlatformError**(message: *`string`*, additional?: *`object`*, innerError?: *`Error`*): [PlatformError](platformerror.md)

*Overrides [CoreError](coreerror.md).[constructor](coreerror.md#constructor)*

*Defined in [error/platformError.ts:6](https://github.com/iota-pico/core/blob/86c99bb/src/error/platformError.ts#L6)*

Create an instance of PlatformError.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message for the error. |
| additional | `object`   |  Additional details about the error. |
| innerError | `Error`   |  Add information from inner error if there was one. |

**Returns:** [PlatformError](platformerror.md)

---

## Properties

<a id="additional"></a>

### `<Optional>` additional

**●  additional**:  *`object`* 

*Inherited from [CoreError](coreerror.md).[additional](coreerror.md#additional)*

*Defined in [error/coreError.ts:16](https://github.com/iota-pico/core/blob/86c99bb/src/error/coreError.ts#L16)*

Additional details about the error.

#### Type declaration

[id: `string`]: `any`

___

<a id="domain"></a>

###  domain

**●  domain**:  *`string`* 

*Inherited from [CoreError](coreerror.md).[domain](coreerror.md#domain)*

*Defined in [error/coreError.ts:11](https://github.com/iota-pico/core/blob/86c99bb/src/error/coreError.ts#L11)*

The domain of the error.

___

<a id="innererror"></a>

### `<Optional>` innerError

**●  innerError**:  *`Error`* 

*Inherited from [CoreError](coreerror.md).[innerError](coreerror.md#innererror)*

*Defined in [error/coreError.ts:21](https://github.com/iota-pico/core/blob/86c99bb/src/error/coreError.ts#L21)*

The inner error if there was one.

___

<a id="message"></a>

### `<Static>` message

**●  message**:  *`string`* 

*Inherited from Error.message*

*Defined in D:/Workarea/iota-pico/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:886*

___

<a id="name"></a>

### `<Static>` name

**●  name**:  *`string`* 

*Inherited from Error.name*

*Defined in D:/Workarea/iota-pico/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:885*

___

<a id="stack"></a>

### `<Static>``<Optional>` stack

**●  stack**:  *`string`* 

*Inherited from Error.stack*

*Defined in D:/Workarea/iota-pico/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:887*

___

## Methods

<a id="format"></a>

###  format

▸ **format**(): `string`

*Inherited from [CoreError](coreerror.md).[format](coreerror.md#format)*

*Defined in [error/coreError.ts:48](https://github.com/iota-pico/core/blob/86c99bb/src/error/coreError.ts#L48)*

Format the error to a readable version.

**Returns:** `string`

___

<a id="iserror"></a>

### `<Static>` isError

▸ **isError**(obj: *`any`*): `boolean`

*Inherited from [CoreError](coreerror.md).[isError](coreerror.md#iserror)*

*Defined in [error/coreError.ts:41](https://github.com/iota-pico/core/blob/86c99bb/src/error/coreError.ts#L41)*

Check if an object could be a CoreError.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  The object to check if it is a CoreError. |

**Returns:** `boolean`
true If the tested object is a CoreError.

___

