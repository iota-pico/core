[@iota-pico/core](../README.md) > [CoreError](../classes/coreerror.md)



# Class: CoreError


A core implementation of an error.

## Hierarchy


 `Error`

**↳ CoreError**







## Index

### Constructors

* [constructor](coreerror.md#constructor)


### Properties

* [additional](coreerror.md#additional)
* [innerError](coreerror.md#innererror)
* [Error](coreerror.md#error)
* [message](coreerror.md#message)
* [name](coreerror.md#name)
* [stack](coreerror.md#stack)


### Methods

* [format](coreerror.md#format)
* [isError](coreerror.md#iserror)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CoreError**(message: *`string`*, additional?: *`object`*, innerError?: *`Error`*): [CoreError](coreerror.md)


*Defined in [error/coreError.ts:15](https://github.com/iotaeco/iota-pico-core/blob/c0570fd/src/error/coreError.ts#L15)*



Create an instance of CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message for the error. |
| additional | `object`   |  Additional details about the error. |
| innerError | `Error`   |  Add information from inner error if there was one. |





**Returns:** [CoreError](coreerror.md)

---


## Properties
<a id="additional"></a>

### «Optional» additional

**●  additional**:  *`object`* 

*Defined in [error/coreError.ts:10](https://github.com/iotaeco/iota-pico-core/blob/c0570fd/src/error/coreError.ts#L10)*



Additional details about the error.

#### Type declaration


[id: `string`]: `any`






___

<a id="innererror"></a>

### «Optional» innerError

**●  innerError**:  *`Error`* 

*Defined in [error/coreError.ts:15](https://github.com/iotaeco/iota-pico-core/blob/c0570fd/src/error/coreError.ts#L15)*



The inner error if there was one.




___

<a id="error"></a>

### «Static» Error

**●  Error**:  *`ErrorConstructor`* 

*Defined in D:/Workarea/iotaeco/iota-pico-core/node_modules/typescript/lib/lib.es5.d.ts:896*





___

<a id="message"></a>

### «Static» message

**●  message**:  *`string`* 

*Inherited from Error.message*

*Defined in D:/Workarea/iotaeco/iota-pico-core/node_modules/typescript/lib/lib.es5.d.ts:886*





___

<a id="name"></a>

### «Static» name

**●  name**:  *`string`* 

*Inherited from Error.name*

*Defined in D:/Workarea/iotaeco/iota-pico-core/node_modules/typescript/lib/lib.es5.d.ts:885*





___

<a id="stack"></a>

### «Static»«Optional» stack

**●  stack**:  *`string`* 

*Inherited from Error.stack*

*Defined in D:/Workarea/iotaeco/iota-pico-core/node_modules/typescript/lib/lib.es5.d.ts:887*





___


## Methods
<a id="format"></a>

###  format

► **format**(): `string`



*Defined in [error/coreError.ts:41](https://github.com/iotaeco/iota-pico-core/blob/c0570fd/src/error/coreError.ts#L41)*



Format the error to a readable version.




**Returns:** `string`





___

<a id="iserror"></a>

### «Static» isError

► **isError**(obj: *`any`*): `boolean`



*Defined in [error/coreError.ts:34](https://github.com/iotaeco/iota-pico-core/blob/c0570fd/src/error/coreError.ts#L34)*



Check if an object could be a CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  The object to check if it is a CoreError. |





**Returns:** `boolean`
true If the tested object is a CoreError.






___


