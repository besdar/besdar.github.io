import { afterEach, describe, expect, it, jest } from "@jest/globals";
import { debounce, getRandomInt } from "./index";

describe("snow helpers", () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.useRealTimers();
    });

    it("maps Math.random into the requested integer range", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.5);

        expect(getRandomInt(10, 20)).toBe(15);
    });

    it("keeps the upper bound exclusive", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.999);

        expect(getRandomInt(1, 8)).toBe(7);
    });

    it("debounces repeated calls until the wait period finishes", () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const debounced = debounce(callback, 50);

        debounced();
        debounced();
        jest.advanceTimersByTime(49);

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
