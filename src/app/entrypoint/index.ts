const windowPadding = 10;
const tooltipPopupSelector = "[data-tooltip-popup]";
type ReducedMotionMedia = Pick<MediaQueryList, "addEventListener" | "matches" | "removeEventListener">;

export const clampTooltipToViewport = (tooltipContainerElement: EventTarget | null) => {
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
        tooltipElement.style.left = `${tooltipElement.offsetLeft + windowPadding - tooltipCoordinates.left}px`;
    } else if (tooltipCoordinates.right > viewportWidth - windowPadding) {
        tooltipElement.style.left = `${
            viewportWidth + tooltipElement.offsetLeft - 2 * windowPadding - tooltipCoordinates.left - tooltipCoordinates.width
        }px`;
    }
};

export const bindTooltipViewportClamp = () => {
    const clampVisibleTooltip = ({ currentTarget }: FocusEvent | MouseEvent) => {
        window.requestAnimationFrame(() => clampTooltipToViewport(currentTarget));
    };

    document.querySelectorAll<HTMLElement>("[data-tooltip-container]").forEach((tooltipContainerElement) => {
        tooltipContainerElement.addEventListener("focusin", clampVisibleTooltip);
        tooltipContainerElement.addEventListener("mouseenter", clampVisibleTooltip);
    });
};

export const shouldEnableSeasonalSnow = (date: Date, reducedMotionMedia: Pick<MediaQueryList, "matches">) =>
    (date.getMonth() === 11 || date.getMonth() < 2) && !reducedMotionMedia.matches;

const getReducedMotionMedia = (): ReducedMotionMedia =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)") ?? {
        addEventListener: () => undefined,
        matches: false,
        removeEventListener: () => undefined,
    };

export const initEntrypoint = () => {
    bindTooltipViewportClamp();

    const currentDate = new Date();
    const reducedMotionMedia = getReducedMotionMedia();

    if (shouldEnableSeasonalSnow(currentDate, reducedMotionMedia)) {
        const initSeasonalSnow = () => {
            import("./snow").then((module) => {
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
