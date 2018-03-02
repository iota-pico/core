/**
 * Tests for BackgroundTaskService.
 */
import * as chai from "chai";
import { BackgroundTaskService } from "../../src/services/backgroundTaskService";

describe("BackgroundTaskService", () => {
    it("can be created", () => {
        const obj = new BackgroundTaskService();
        chai.should().exist(obj);
    });

    describe("create", () => {
        it("can create a task that completes", async () => {
            const obj = new BackgroundTaskService();
            const ret = await obj.create<string>(async () => Promise.resolve("foo"), 0);
            chai.expect(ret).to.be.equal("foo");
        });

        it("can create a task that fails", async () => {
            const obj = new BackgroundTaskService();
            try {
                await obj.create<string>(() => { throw new Error("err"); }, 0);
                chai.assert("test should have failed");
            } catch (err) {
                chai.expect(err.message).to.be.equal("err");
            }
        });
    });
});
