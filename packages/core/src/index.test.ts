import { Counter } from "./Counter";

describe("Counter Tests", () => {
    it("should start with a count of 0", () => {
        const counter = new Counter();
        expect(counter.value).toBe(0);
    })
})