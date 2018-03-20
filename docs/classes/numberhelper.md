[@iota-pico/core](../README.md) > [NumberHelper](../classes/numberhelper.md)



# Class: NumberHelper


Number helper methods.

## Index

### Methods

* [isFloatString](numberhelper.md#isfloatstring)
* [isInteger](numberhelper.md#isinteger)
* [isIntegerString](numberhelper.md#isintegerstring)
* [isNumber](numberhelper.md#isnumber)



---
## Methods
<a id="isfloatstring"></a>

### «Static» isFloatString

► **isFloatString**(value: *`string`*): `boolean`



*Defined in [helpers/numberHelper.ts:28](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/helpers/numberHelper.ts#L28)*



Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The value to check |





**Returns:** `boolean`
True if the number is formatted correctly.






___

<a id="isinteger"></a>

### «Static» isInteger

► **isInteger**(value: *`any`*): `boolean`



*Defined in [helpers/numberHelper.ts:10](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/helpers/numberHelper.ts#L10)*



Is the value an integer.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any`   |  Object to test for its integerness. |





**Returns:** `boolean`
True if the object is a integer.






___

<a id="isintegerstring"></a>

### «Static» isIntegerString

► **isIntegerString**(value: *`string`*): `boolean`



*Defined in [helpers/numberHelper.ts:37](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/helpers/numberHelper.ts#L37)*



Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The value to check |





**Returns:** `boolean`
True if the number is formatted correctly.






___

<a id="isnumber"></a>

### «Static» isNumber

► **isNumber**(value: *`any`*): `boolean`



*Defined in [helpers/numberHelper.ts:19](https://github.com/iotaeco/iota-pico-core/blob/73a2e5a/src/helpers/numberHelper.ts#L19)*



Is the value a number.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any`   |  Object to test for its numberyness. |





**Returns:** `boolean`
True if the object is a number.






___


