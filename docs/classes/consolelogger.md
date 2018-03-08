[@iota-pico/core](../README.md) > [ConsoleLogger](../classes/consolelogger.md)



# Class: ConsoleLogger


Implementation of ILogger which sends to the this._loggingObject.

## Implements

* [ILogger](../interfaces/ilogger.md)

## Index

### Constructors

* [constructor](consolelogger.md#constructor)


### Methods

* [banner](consolelogger.md#banner)
* [error](consolelogger.md#error)
* [info](consolelogger.md#info)
* [warning](consolelogger.md#warning)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ConsoleLogger**(loggingObject?: *`Console`*): [ConsoleLogger](consolelogger.md)


*Defined in loggers/consoleLogger.ts:12*



Create and instance of the console logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loggingObject | `Console`   |  - |





**Returns:** [ConsoleLogger](consolelogger.md)

---


## Methods
<a id="banner"></a>

###  banner

► **banner**(message: *`string`*, args?: *`any`*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[banner](../interfaces/ilogger.md#banner)*

*Defined in loggers/consoleLogger.ts:26*



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

*Defined in loggers/consoleLogger.ts:59*



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

*Defined in loggers/consoleLogger.ts:38*



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

*Defined in loggers/consoleLogger.ts:48*



Send warning to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___


