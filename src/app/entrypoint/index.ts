import { bindThemeSwitcher } from "./theme";

export const clampTooltipToViewport = (tooltipContainerElement: EventTarget | null) => {
    const windowPadding = 10;
    const tooltipPopupSelector = "[data-tooltip-popup]";

    if (!(tooltipContainerElement instanceof HTMLElement)) {
        return;
    }

    const tooltipElement = tooltipContainerElement.querySelector<HTMLElement>(tooltipPopupSelector);
    if (!tooltipElement) {
        return;
    }

    tooltipElement.style.left = "";

    const tooltipCoordinates = tooltipElement.getBoundingClientRect();
    if (tooltipCoordinates.width === 0) {
        return;
    }

    const viewportWidth = document.documentElement.clientWidth;

    if (tooltipCoordinates.left < windowPadding) {
        tooltipElement.style.left = `${String(tooltipElement.offsetLeft + windowPadding - tooltipCoordinates.left)}px`;
    } else if (tooltipCoordinates.right > viewportWidth - windowPadding) {
        tooltipElement.style.left = `${String(viewportWidth + tooltipElement.offsetLeft - 2 * windowPadding - tooltipCoordinates.left - tooltipCoordinates.width)}px`;
    }
};

export const bindTooltipViewportClamp = () => {
    const clampVisibleTooltip = ({ currentTarget }: FocusEvent | MouseEvent) => {
        window.requestAnimationFrame(() => {
            clampTooltipToViewport(currentTarget);
        });
    };

    document.querySelectorAll<HTMLElement>("[data-tooltip-container]").forEach((tooltipContainerElement) => {
        tooltipContainerElement.addEventListener("focusin", clampVisibleTooltip);
        tooltipContainerElement.addEventListener("mouseenter", clampVisibleTooltip);
    });
};

export const shouldEnableSeasonalSnow = (date: Date, reducedMotionMedia: Pick<MediaQueryList, "matches">) =>
    (date.getMonth() === 11 || date.getMonth() < 2) && !reducedMotionMedia.matches;

export const initEntrypoint = () => {
    bindThemeSwitcher();
    bindTooltipViewportClamp();

    const currentDate = new Date();
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (shouldEnableSeasonalSnow(currentDate, reducedMotionMedia)) {
        const initSeasonalSnow = () => {
            void import("./snow").then((module) => {
                module.initSnow(reducedMotionMedia);
            });
        };

        if (document.readyState === "complete") {
            initSeasonalSnow();
        } else {
            window.addEventListener("load", initSeasonalSnow, { once: true });
        }
    }
};

initEntrypoint();
