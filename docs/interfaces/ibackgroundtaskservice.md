[@iota-pico/core](../README.md) > [IBackgroundTaskService](../interfaces/ibackgroundtaskservice.md)

# Interface: IBackgroundTaskService

Represents a class which can provide background tasks.
*__interface__*: 

## Hierarchy

**IBackgroundTaskService**

## Implemented by

* [BackgroundTaskService](../classes/backgroundtaskservice.md)

## Index

### Methods

* [create](ibackgroundtaskservice.md#create)

---

## Methods

<a id="create"></a>

###  create

▸ **create**T(task: *`function`*, delay: *`number`*): `Promise`.<`T`>

*Defined in [interfaces/IBackgroundTaskService.ts:11](https://github.com/iotaeco/iota-pico-core/blob/1ab2281/src/interfaces/IBackgroundTaskService.ts#L11)*

Create a background task.

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| task | `function`   |  The task to run in the background. |
| delay | `number`   |  The delay before running the task. |

**Returns:** `Promise`.<`T`>

___

