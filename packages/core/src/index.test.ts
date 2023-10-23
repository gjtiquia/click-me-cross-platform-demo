import { Counter } from "./Counter";

describe("Counter Tests", () => {
    var _counter = new Counter();

    beforeEach(() => {
        _counter = new Counter();
    })

    it("should start with a count of 0", () => {
        expect(_counter.value).toBe(0);
    })

    it("should have value 1 after increment", () => {
        _counter.increment();
        expect(_counter.value).toBe(1);
    })

    it("should have value -1 after decrement", () => {
        _counter.decrement();
        expect(_counter.value).toBe(-1);
    })
})