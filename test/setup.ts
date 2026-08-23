const createMediaQueryList = (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
});

if (typeof window !== "undefined") {
    Object.defineProperty(window, "matchMedia", {
        configurable: true,
        value: createMediaQueryList,
        writable: true,
    });
}
