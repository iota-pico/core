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
* [log](consolelogger.md#log)
* [warning](consolelogger.md#warning)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ConsoleLogger**(loggingObject?: *`Console`*): [ConsoleLogger](consolelogger.md)


*Defined in [loggers/consoleLogger.ts:13](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L13)*



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

► **banner**(message: *`string`*, ...args: *`any`[]*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[banner](../interfaces/ilogger.md#banner)*

*Defined in [loggers/consoleLogger.ts:27](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L27)*



Send banner to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`[]   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="error"></a>

###  error

► **error**(message: *`string`*, err?: *`any`*, ...args: *`any`[]*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[error](../interfaces/ilogger.md#error)*

*Defined in [loggers/consoleLogger.ts:70](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L70)*



Send error to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| err | `any`   |  An error object to log. |
| args | `any`[]   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="info"></a>

###  info

► **info**(message: *`string`*, ...args: *`any`[]*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[info](../interfaces/ilogger.md#info)*

*Defined in [loggers/consoleLogger.ts:49](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L49)*



Send information to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`[]   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="log"></a>

###  log

► **log**(message: *`string`*, ...args: *`any`[]*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[log](../interfaces/ilogger.md#log)*

*Defined in [loggers/consoleLogger.ts:39](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L39)*



Send log to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`[]   |  Additional parameters to log. |





**Returns:** `void`





___

<a id="warning"></a>

###  warning

► **warning**(message: *`string`*, ...args: *`any`[]*): `void`



*Implementation of [ILogger](../interfaces/ilogger.md).[warning](../interfaces/ilogger.md#warning)*

*Defined in [loggers/consoleLogger.ts:59](https://github.com/iotaeco/iota-pico-core/blob/d1dc07c/src/loggers/consoleLogger.ts#L59)*



Send warning to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`[]   |  Additional parameters to log. |





**Returns:** `void`





___


