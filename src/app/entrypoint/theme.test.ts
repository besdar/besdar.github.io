import { afterEach, describe, expect, it } from "@jest/globals";
import { bindThemeSwitcher, createThemeController, getStoredTheme } from "./theme";

const createThemeMedia = (matches: boolean) => {
    const listeners = new Set<(event: MediaQueryListEvent) => void>();
    const media = {
        matches,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) => {
            listeners.add(listener);
        },
        removeEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) => {
            listeners.delete(listener);
        },
        dispatchEvent: () => false,
        setMatches: (nextMatches: boolean) => {
            media.matches = nextMatches;
            listeners.forEach((listener) => {
                listener({ matches: nextMatches } as MediaQueryListEvent);
            });
        },
    };

    return media;
};

const createDocument = () => {
    const root = document.documentElement;

    return { documentElement: root };
};

describe("theme controller", () => {
    afterEach(() => {
        localStorage.clear();
        document.documentElement.removeAttribute("data-theme");
    });

    it("uses the system theme when no theme is stored", () => {
        const media = createThemeMedia(true);
        const documentAdapter = createDocument();
        const controller = createThemeController({ media, document: documentAdapter });

        expect(controller.theme).toBe("dark");
        expect(documentAdapter.documentElement.dataset.theme).toBe("dark");
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("stores a selected theme when it differs from the system theme", () => {
        const media = createThemeMedia(false);
        const documentAdapter = createDocument();
        const controller = createThemeController({ media, document: documentAdapter });

        controller.setTheme("dark");

        expect(controller.theme).toBe("dark");
        expect(localStorage.getItem("theme")).toBe("dark");
        expect(documentAdapter.documentElement.dataset.theme).toBe("dark");
    });

    it("removes the stored theme when the selected theme matches the system theme", () => {
        localStorage.setItem("theme", "dark");
        const media = createThemeMedia(true);
        const controller = createThemeController({ media, document: createDocument() });

        expect(controller.theme).toBe("dark");
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("removes the stored theme when a user selects the system theme", () => {
        const media = createThemeMedia(false);
        localStorage.setItem("theme", "dark");
        const controller = createThemeController({ media, document: createDocument() });

        controller.setTheme("light");

        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("removes a stored theme when a system change makes it match", () => {
        localStorage.setItem("theme", "dark");
        const media = createThemeMedia(false);
        const documentAdapter = createDocument();
        const controller = createThemeController({ media, document: documentAdapter });

        media.setMatches(true);

        expect(controller.theme).toBe("dark");
        expect(localStorage.getItem("theme")).toBeNull();
        expect(documentAdapter.documentElement.dataset.theme).toBe("dark");
    });

    it("binds the switcher button to toggle and label the active theme", () => {
        document.body.innerHTML = '<button data-theme-switcher type="button">Theme</button>';

        bindThemeSwitcher();

        const button = document.querySelector<HTMLButtonElement>("[data-theme-switcher]");
        button?.click();

        expect(button?.textContent).toBe("Dark mode");
        expect(button?.getAttribute("aria-label")).toBe("Switch to light mode");
        expect(localStorage.getItem("theme")).toBe("dark");

        button?.click();

        expect(button?.textContent).toBe("Light mode");
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("ignores invalid stored theme values", () => {
        localStorage.setItem("theme", "sepia");

        expect(getStoredTheme()).toBeNull();
    });
});
