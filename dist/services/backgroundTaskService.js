Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Default implementation of background task service.
 */
class BackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZFRhc2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsTUFBTSxDQUFJLElBQXNCLEVBQUUsS0FBYTtRQUN4RCxPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ0EsSUFBSTtvQkFDQSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDbkI7Z0JBQUMsT0FBTyxHQUFHLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxFQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbEJELHNEQWtCQyJ9