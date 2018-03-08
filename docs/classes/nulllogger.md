[@iota-pico/core](../README.md) > [NullLogger](../classes/nulllogger.md)



# Class: NullLogger


Implementation of ILogger which is silent.

## Implements

* [ILogger](../interfaces/ilogger.md)

## Index

### Methods

* [banner](nulllogger.md#banner)
* [error](nulllogger.md#error)
* [info](nulllogger.md#info)
* [warning](nulllogger.md#warning)



---
## Methods
<a id="banner"></a>

###  banner

► **banner**(message: *`string`*, args?: *`any`*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[banner](../interfaces/ilogger.md#banner)*

*Defined in loggers/nullLogger.ts:12*



Send banner to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="error"></a>

###  error

► **error**(message: *`string`*, err?: *`any`*, args?: *`any`*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[error](../interfaces/ilogger.md#error)*

*Defined in loggers/nullLogger.ts:37*



Send error to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| err | `any`   |  An error object to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="info"></a>

###  info

► **info**(message: *`string`*, args?: *`any`*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[info](../interfaces/ilogger.md#info)*

*Defined in loggers/nullLogger.ts:20*



Send information to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="warning"></a>

###  warning

► **warning**(message: *`string`*, args?: *`any`*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[warning](../interfaces/ilogger.md#warning)*

*Defined in loggers/nullLogger.ts:28*



Send warning to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___


