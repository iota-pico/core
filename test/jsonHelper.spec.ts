/**
 * Tests for JsonHelper.
 */
import * as chai from "chai";
import { JsonHelper } from "../src/helpers/jsonHelper";

describe("JsonHelper", () => {
    it("can be created", () => {
        const obj = new JsonHelper();
        chai.should().exist(obj);
    });

    describe("stringify", () => {
        it("can return JSON when called with undefined", () => {
            chai.expect(JsonHelper.stringify(undefined)).to.equal(undefined);
        });

        it("can return JSON when called with null", () => {
            chai.expect(JsonHelper.stringify(null)).to.equal("null");
        });

        it("can return JSON when called with a string", () => {
            chai.expect(JsonHelper.stringify("hello")).to.equal(JSON.stringify("hello"));
        });

        it("can return JSON when called with a number", () => {
            chai.expect(JsonHelper.stringify(10)).to.equal(JSON.stringify(10));
        });

        it("can return JSON when called with a boolean", () => {
            chai.expect(JsonHelper.stringify(true)).to.equal(JSON.stringify(true));
        });

        it("can return JSON when called with an object", () => {
            chai.expect(JsonHelper.stringify({ p1: true, p2: 10})).to.equal(JSON.stringify({ p1: true, p2: 10}));
        });

        it("can return JSON when called with a recursive object", () => {
            const obj: { p1: boolean; p2: number; p3: any } = { p1: true, p2: 10, p3: undefined};
            obj.p3 = obj;
            chai.expect(JsonHelper.stringify(obj)).to.equal(JSON.stringify({ p1: true, p2: 10}));
        });

        it("can return formatted JSON when called with a recursive object", () => {
            const obj: { p1: boolean; p2: number; p3: any } = { p1: true, p2: 10, p3: undefined};
            obj.p3 = obj;
            chai.expect(JsonHelper.stringify(obj, undefined, "\t")).to.equal(JSON.stringify({ p1: true, p2: 10}, undefined, "\t"));
        });
    });
});
