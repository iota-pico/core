import { IBackgroundTaskService } from "../interfaces/IBackgroundTaskService";
/**
 * Default implementation of background task service.
 */
export declare class BackgroundTaskService implements IBackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    create<T>(task: () => Promise<T>, delay: number): Promise<T>;
}
