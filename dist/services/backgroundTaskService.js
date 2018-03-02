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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZFRhc2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsTUFBTSxDQUFJLElBQXNCLEVBQUUsS0FBYTtRQUN4RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDQSxJQUFJLENBQUM7b0JBQ0QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDLEVBQ0YsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFsQkQsc0RBa0JDIn0=