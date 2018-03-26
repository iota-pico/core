/**
 * Tests for FactoryBase.
 */
import * as chai from "chai";
import { FactoryBase } from "../../src/factories/factoryBase";

class TestClass {
    public value1: number;
    public value2: number;

    constructor(num1: number, num2: number) {
        this.value1 = num1;
        this.value2 = num2;
    }
}

class TestFactory extends FactoryBase<TestClass> {
    /* @internal */
    private static _instance: TestFactory;

    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    private constructor() {
        super();
    }

    public static instance(): FactoryBase<TestClass> {
        if (!TestFactory._instance) {
            TestFactory._instance = new TestFactory();
        }
        return TestFactory._instance;
    }

    public static reset(): void {
        TestFactory._instance = undefined;
    }

    protected getInstance(): FactoryBase<TestClass> {
        return TestFactory.instance();
    }
}

describe("FactoryBase", () => {
    beforeEach(() => {
        TestFactory.reset();
    });

    it("can be created", () => {
        const obj = TestFactory.instance();
        chai.should().exist(obj);
    });

    describe("register", () => {
        it("can register a type", () => {
            const obj = TestFactory.instance();
            chai.expect(obj.exists("test")).to.be.equal(false);
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            chai.expect(obj.exists("test")).to.be.equal(true);
            obj.unregister("test");
        });

        it("can register an existing type", () => {
            const obj = TestFactory.instance();
            chai.expect(obj.exists("test")).to.be.equal(false);
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            chai.expect(obj.exists("test")).to.be.equal(true);
            obj.unregister("test");
        });
    });

    describe("unregister", () => {
        it("can unregister a non existing type", () => {
            const obj = TestFactory.instance();
            obj.unregister("test");
            chai.expect(obj.exists("test")).to.be.equal(false);
        });
        it("can unregister an existing type", () => {
            const obj = TestFactory.instance();
            chai.expect(obj.exists("test")).to.be.equal(false);
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            chai.expect(obj.exists("test")).to.be.equal(true);
            obj.unregister("test");
            chai.expect(obj.exists("test")).to.be.equal(false);
        });
    });

    describe("create", () => {
        it("can fail to create an unknown instance", () => {
            const obj = TestFactory.instance();
            chai.expect(obj.create("test")).to.be.equal(undefined);
        });
        it("can create a known type with no constructor parameters", () => {
            const obj = TestFactory.instance();
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            const obj2 = obj.create("test");
            chai.expect(obj2.value1).to.be.equal(undefined);
            chai.expect(obj2.value2).to.be.equal(undefined);
        });
        it("can create a known type and constructor parameters", () => {
            const obj = TestFactory.instance();
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            const obj2 = obj.create("test", 5, 7);
            chai.expect(obj2.value1).to.be.equal(5);
            chai.expect(obj2.value2).to.be.equal(7);
        });
    });

    describe("types", () => {
        it("can get not types with nothing registered", () => {
            const obj = TestFactory.instance();
            chai.expect(obj.types()).to.be.deep.equal([]);
        });
        it("can get types when they are registered", () => {
            const obj = TestFactory.instance();
            obj.register("test", (...args) => new TestClass(args[0], args[1]));
            chai.expect(obj.types()).to.be.deep.equal(["test"]);
        });
    });
});
