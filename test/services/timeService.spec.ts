/**
 * Tests for TimeService.
 */
import * as chai from "chai";
import { TimeService } from "../../src/services/timeService";

describe("TimeService", () => {
    it("can be created", () => {
        const obj = new TimeService();
        chai.should().exist(obj);
    });

    describe("msSinceEpoch", () => {
        it("can return a time", () => {
            const obj = new TimeService();
            const timeNow = Date.now();
            const ret = obj.msSinceEpoch();
            chai.expect(ret).to.be.gte(timeNow);
            chai.expect(ret).to.be.lte(timeNow + 1000);
        });
    });
});
