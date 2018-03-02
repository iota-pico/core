import { IBackgroundTaskService } from "../interfaces/IBackgroundTaskService";

/**
 * Default implementation of background task service.
 */
export class BackgroundTaskService implements IBackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    public async create<T>(task: () => Promise<T>, delay: number): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            setTimeout(() => {
                            try {
                                resolve(task());
                            } catch (err) {
                                reject(err);
                            }
                        },
                       delay);
        });
    }
}
