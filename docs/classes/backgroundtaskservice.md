[@iota-pico/core](../README.md) > [BackgroundTaskService](../classes/backgroundtaskservice.md)

# Class: BackgroundTaskService

Default implementation of background task service.

## Hierarchy

**BackgroundTaskService**

## Implements

* [IBackgroundTaskService](../interfaces/ibackgroundtaskservice.md)

## Index

### Methods

* [create](backgroundtaskservice.md#create)

---

## Methods

<a id="create"></a>

###  create

▸ **create**T(task: *`function`*, delay: *`number`*): `Promise`.<`T`>

*Defined in [services/backgroundTaskService.ts:13](https://github.com/iota-pico/core/blob/35412fd/src/services/backgroundTaskService.ts#L13)*

Create a background task.

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| task | `function`   |  The task to run in the background. |
| delay | `number`   |  The delay before running the task. |

**Returns:** `Promise`.<`T`>
The result of the background task.

___

