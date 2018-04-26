Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Default implementation of background task service.
 */
class BackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     * @returns The result of the background task.
     */
    async create(task, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(task());
                }
                catch (err) {
                    reject(err);
                }
            }, delay);
        });
    }
}
exports.BackgroundTaskService = BackgroundTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZFRhc2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUNJOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBSSxJQUFzQixFQUFFLEtBQWE7UUFDeEQsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNBLElBQUk7b0JBQ0EsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ25CO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtZQUNMLENBQUMsRUFDRixLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQW5CRCxzREFtQkMifQ==