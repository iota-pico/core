[@iota-pico/core](../README.md) > [ILogger](../interfaces/ilogger.md)



# Interface: ILogger


Represents a class which can provide logging.
*__interface__*: 


## Implemented by

* [ConsoleLogger](../classes/consolelogger.md)
* [NullLogger](../classes/nulllogger.md)


## Methods
<a id="banner"></a>

###  banner

► **banner**(message: *`string`*, args?: *`any`*): `void`



*Defined in interfaces/ILogger.ts:11*



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



*Defined in interfaces/ILogger.ts:30*



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



*Defined in interfaces/ILogger.ts:17*



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



*Defined in interfaces/ILogger.ts:23*



Send warning to the logger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message to log. |
| args | `any`   |  Additional parameters to log. |





**Returns:** `void`





___


