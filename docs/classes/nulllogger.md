[@iota-pico/core](../README.md) > [NullLogger](../classes/nulllogger.md)

# Class: NullLogger

Implementation of ILogger which is silent.

## Hierarchy

**NullLogger**

## Implements

* [ILogger](../interfaces/ilogger.md)

## Index

### Methods

* [banner](nulllogger.md#banner)
* [error](nulllogger.md#error)
* [info](nulllogger.md#info)
* [log](nulllogger.md#log)
* [warning](nulllogger.md#warning)

---

## Methods

<a id="banner"></a>

###  banner

▸ **banner**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[banner](../interfaces/ilogger.md#banner)*

*Defined in [loggers/nullLogger.ts:12](https://github.com/iota-pico/core/tree/master/src/loggers/nullLogger.ts#L12*

Send banner to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(message: *`string`*, err?: *`any`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[error](../interfaces/ilogger.md#error)*

*Defined in [loggers/nullLogger.ts:45](https://github.com/iota-pico/core/tree/master/src/loggers/nullLogger.ts#L45*

Send error to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Optional` err | `any` |  An error object to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="info"></a>

###  info

▸ **info**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[info](../interfaces/ilogger.md#info)*

*Defined in [loggers/nullLogger.ts:28](https://github.com/iota-pico/core/tree/master/src/loggers/nullLogger.ts#L28*

Send information to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="log"></a>

###  log

▸ **log**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[log](../interfaces/ilogger.md#log)*

*Defined in [loggers/nullLogger.ts:20](https://github.com/iota-pico/core/tree/master/src/loggers/nullLogger.ts#L20*

Send log to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="warning"></a>

###  warning

▸ **warning**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[warning](../interfaces/ilogger.md#warning)*

*Defined in [loggers/nullLogger.ts:36](https://github.com/iota-pico/core/tree/master/src/loggers/nullLogger.ts#L36*

Send warning to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___

