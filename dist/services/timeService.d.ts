import { ITimeService } from "../interfaces/ITimeService";
/**
 * Represents a class which can provide the time.
 */
export declare class TimeService implements ITimeService {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch(): number;
}
