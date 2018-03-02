[@iota-pico/core](../README.md) > [IBackgroundTaskService](../interfaces/ibackgroundtaskservice.md)



# Interface: IBackgroundTaskService


Represents a class which can provide background tasks.
*__interface__*: 


## Implemented by

* [BackgroundTaskService](../classes/backgroundtaskservice.md)


## Methods
<a id="create"></a>

###  create

► **create**T(task: *`function`*, delay: *`number`*): `Promise`.<`T`>



*Defined in interfaces/IBackgroundTaskService.ts:11*



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


