[@iota-pico/core](../README.md) > [StringHelper](../classes/stringhelper.md)



# Class: StringHelper


String helper methods.

## Index

### Methods

* [decodeNonASCII](stringhelper.md#decodenonascii)
* [encodeNonASCII](stringhelper.md#encodenonascii)
* [isAscii](stringhelper.md#isascii)
* [isEmpty](stringhelper.md#isempty)
* [isString](stringhelper.md#isstring)



---
## Methods
<a id="decodenonascii"></a>

### «Static» decodeNonASCII

► **decodeNonASCII**(value: *`string`*): `string`



*Defined in [helpers/stringHelper.ts:48](https://github.com/iotaeco/iota-pico-core/blob/e0d8965/src/helpers/stringHelper.ts#L48)*



Decode control characters to ASCII.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The encoded string to convert back to ASCII. |





**Returns:** `string`
The decoded version of the string.






___

<a id="encodenonascii"></a>

### «Static» encodeNonASCII

► **encodeNonASCII**(value: *`string`*): `string`



*Defined in [helpers/stringHelper.ts:39](https://github.com/iotaeco/iota-pico-core/blob/e0d8965/src/helpers/stringHelper.ts#L39)*



Encode non ASCII characters with control characters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The string value to escape. |





**Returns:** `string`
The escaped version of the string.






___

<a id="isascii"></a>

### «Static» isAscii

► **isAscii**(value: *`string`*): `boolean`



*Defined in [helpers/stringHelper.ts:29](https://github.com/iotaeco/iota-pico-core/blob/e0d8965/src/helpers/stringHelper.ts#L29)*



Is the string all ASCII characters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  string to test if is is ASCII. |





**Returns:** `boolean`
True if the object is all ASCII.






___

<a id="isempty"></a>

### «Static» isEmpty

► **isEmpty**(value: *`any`*): `boolean`



*Defined in [helpers/stringHelper.ts:20](https://github.com/iotaeco/iota-pico-core/blob/e0d8965/src/helpers/stringHelper.ts#L20)*



Is the value a string that is empty.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any`   |  Object to test for its no emptyness. |





**Returns:** `boolean`
True if the object is an empty string.






___

<a id="isstring"></a>

### «Static» isString

► **isString**(value: *`any`*): `boolean`



*Defined in [helpers/stringHelper.ts:10](https://github.com/iotaeco/iota-pico-core/blob/e0d8965/src/helpers/stringHelper.ts#L10)*



Is the value a string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any`   |  Object to test for its stringyness. |





**Returns:** `boolean`
True if the object is a string.






___


