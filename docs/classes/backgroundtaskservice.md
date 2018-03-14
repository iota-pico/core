[@iota-pico/core](../README.md) > [BackgroundTaskService](../classes/backgroundtaskservice.md)



# Class: BackgroundTaskService


Default implementation of background task service.

## Implements

* [IBackgroundTaskService](../interfaces/ibackgroundtaskservice.md)

## Index

### Methods

* [create](backgroundtaskservice.md#create)



---
## Methods
<a id="create"></a>

###  create

► **create**T(task: *`function`*, delay: *`number`*): `Promise`.<`T`>



*Defined in [services/backgroundTaskService.ts:12](https://github.com/iotaeco/iota-pico-core/blob/8dad1d3/src/services/backgroundTaskService.ts#L12)*



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


