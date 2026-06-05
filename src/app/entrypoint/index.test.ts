import { afterEach, describe, expect, it } from "@jest/globals";
import { clampTooltipToViewport, shouldEnableSeasonalSnow } from "./index";

const setViewportWidth = (width: number) => {
    Object.defineProperty(document.documentElement, "clientWidth", {
        configurable: true,
        value: width,
    });
};

const setOffsetLeft = (element: HTMLElement, offsetLeft: number) => {
    Object.defineProperty(element, "offsetLeft", {
        configurable: true,
        value: offsetLeft,
    });
};

const setRect = (element: HTMLElement, left: number, width: number) => {
    element.getBoundingClientRect = () =>
        ({
            bottom: 1,
            height: 1,
            left,
            right: left + width,
            top: 0,
            width,
            x: left,
            y: 0,
            toJSON: () => ({}),
        }) as DOMRect;
};

const createTooltipElements = () => {
    const container = document.createElement("span");
    const tooltip = document.createElement("span");

    tooltip.dataset.tooltipPopup = "";
    container.append(tooltip);
    document.body.append(container);

    return { container, tooltip };
};

describe("entrypoint tooltip logic", () => {
    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("moves a tooltip right when it overflows the left viewport edge", () => {
        const { container, tooltip } = createTooltipElements();
        setViewportWidth(100);
        setOffsetLeft(tooltip, 20);
        setRect(tooltip, -5, 50);

        clampTooltipToViewport(container);

        expect(tooltip.style.left).toBe("35px");
    });

    it("moves a tooltip left when it overflows the right viewport edge", () => {
        const { container, tooltip } = createTooltipElements();
        setViewportWidth(100);
        setOffsetLeft(tooltip, 40);
        setRect(tooltip, 80, 60);

        clampTooltipToViewport(container);

        expect(tooltip.style.left).toBe("-20px");
    });

    it("keeps zero-width tooltips unshifted after resetting prior inline state", () => {
        const { container, tooltip } = createTooltipElements();
        tooltip.style.left = "12px";
        setViewportWidth(100);
        setOffsetLeft(tooltip, 20);
        setRect(tooltip, 20, 0);

        clampTooltipToViewport(container);

        expect(tooltip.style.left).toBe("");
    });
});

describe("entrypoint seasonal snow logic", () => {
    it("enables seasonal snow only in winter months without reduced motion", () => {
        expect(shouldEnableSeasonalSnow(new Date("2026-12-01T00:00:00Z"), { matches: false })).toBe(true);
        expect(shouldEnableSeasonalSnow(new Date("2026-01-01T00:00:00Z"), { matches: false })).toBe(true);
        expect(shouldEnableSeasonalSnow(new Date("2026-03-01T00:00:00Z"), { matches: false })).toBe(false);
        expect(shouldEnableSeasonalSnow(new Date("2026-12-01T00:00:00Z"), { matches: true })).toBe(false);
    });
});
