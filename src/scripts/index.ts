document.querySelectorAll<HTMLSpanElement>(".tech-stack-item").forEach((tooltipContainerElement) => {
    tooltipContainerElement.addEventListener("focus", ({ currentTarget }) => {
        if (window.innerWidth < 700) {
            return;
        }

        const windowPadding = 10;
        const tooltipElement = (currentTarget as HTMLSpanElement)?.querySelector<HTMLSpanElement>(".tooltip");
        if (!tooltipElement) {
            return;
        }

        const tooltipCoordinates = tooltipElement.getBoundingClientRect();

        if (tooltipCoordinates.x < windowPadding) {
            tooltipElement.style.left = `${tooltipElement.offsetLeft + windowPadding - tooltipCoordinates.x}px`;
        } else if (tooltipCoordinates.x + tooltipCoordinates.width > window.innerWidth - windowPadding) {
            tooltipElement.style.left = `${
                window.innerWidth + tooltipElement.offsetLeft - 2 * windowPadding - tooltipCoordinates.x - tooltipCoordinates.width
            }px`;
        }
    });
});
