/**
 * Represents a class which can provide background tasks.
 * @interface
 */
export interface IBackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    create<T>(task: () => Promise<T>, delay: number): Promise<T>;
}
