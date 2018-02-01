[@iota-pico/core](../README.md) > [CoreError](../classes/coreerror.md)



# Class: CoreError


A core implementation of an error.

## Implements

* [IError](../interfaces/ierror.md)

## Index

### Constructors

* [constructor](coreerror.md#constructor)


### Properties

* [additional](coreerror.md#additional)
* [message](coreerror.md#message)
* [stack](coreerror.md#stack)


### Methods

* [format](coreerror.md#format)
* [isError](coreerror.md#iserror)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CoreError**(message: *`string`*, additional?: *`object`*): [CoreError](coreerror.md)


*Defined in [error/coreError.ts:19](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L19)*



Create an instance of CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message for the error. |
| additional | `object`   |  Additional details about the error. |





**Returns:** [CoreError](coreerror.md)

---


## Properties
<a id="additional"></a>

### «Optional» additional

**●  additional**:  *`object`* 

*Implementation of [IError](../interfaces/ierror.md).[additional](../interfaces/ierror.md#additional)*

*Defined in [error/coreError.ts:19](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L19)*



Additional details about the error.

#### Type declaration


[id: `string`]: `any`






___

<a id="message"></a>

###  message

**●  message**:  *`string`* 

*Implementation of [IError](../interfaces/ierror.md).[message](../interfaces/ierror.md#message)*

*Defined in [error/coreError.ts:11](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L11)*



The message for the error.




___

<a id="stack"></a>

###  stack

**●  stack**:  *`string`* 

*Implementation of [IError](../interfaces/ierror.md).[stack](../interfaces/ierror.md#stack)*

*Defined in [error/coreError.ts:15](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L15)*



The stack trace for the error.




___


## Methods
<a id="format"></a>

###  format

► **format**(): `string`



*Defined in [error/coreError.ts:44](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L44)*



Format the error to a readable version.




**Returns:** `string`





___

<a id="iserror"></a>

### «Static» isError

► **isError**(obj: *`any`*): `boolean`



*Defined in [error/coreError.ts:37](https://github.com/iotaeco/iota-pico-core/blob/9e91e5f/src/error/coreError.ts#L37)*



Check if an object could be a CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  The object to check if it is a CoreError. |





**Returns:** `boolean`
true If the tested object is a CoreError.






___


