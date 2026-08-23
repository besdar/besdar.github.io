export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

const DARK_THEME_MEDIA_QUERY = "(prefers-color-scheme: dark)";

type ThemeStorage = Pick<Storage, "getItem" | "removeItem" | "setItem">;
type ThemeDocument = Pick<Document, "documentElement">;
interface ThemeMedia {
    addEventListener: (type: "change", listener: (event: MediaQueryListEvent) => void) => void;
    matches: boolean;
    removeEventListener: (type: "change", listener: (event: MediaQueryListEvent) => void) => void;
}

interface ThemeControllerOptions {
    document?: ThemeDocument;
    media?: ThemeMedia;
    onThemeChange?: (theme: Theme) => void;
    storage?: ThemeStorage;
}

export interface ThemeController {
    readonly theme: Theme;
    destroy: () => void;
    setTheme: (theme: Theme) => void;
}

const isTheme = (value: string | null): value is Theme => value === "dark" || value === "light";

const getDefaultStorage = () => window.localStorage;

export const getStoredTheme = (storage: ThemeStorage = getDefaultStorage()): Theme | null => {
    try {
        const storedTheme = storage.getItem(THEME_STORAGE_KEY);

        return isTheme(storedTheme) ? storedTheme : null;
    } catch {
        return null;
    }
};

const removeStoredTheme = (storage: ThemeStorage) => {
    try {
        storage.removeItem(THEME_STORAGE_KEY);
    } catch {
        // Storage may be unavailable in privacy-restricted browser contexts.
    }
};

const storeTheme = (storage: ThemeStorage, theme: Theme) => {
    try {
        storage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Storage may be unavailable in privacy-restricted browser contexts.
    }
};

const getSystemTheme = (media: Pick<MediaQueryList, "matches">): Theme => (media.matches ? "dark" : "light");

const applyTheme = (document: ThemeDocument, theme: Theme) => {
    document.documentElement.dataset.theme = theme;
};

export const createThemeController = ({
    document = window.document,
    media = window.matchMedia(DARK_THEME_MEDIA_QUERY),
    onThemeChange,
    storage = getDefaultStorage(),
}: ThemeControllerOptions = {}): ThemeController => {
    let currentTheme: Theme;
    let storedTheme = getStoredTheme(storage);

    const notifyThemeChange = (theme: Theme) => {
        currentTheme = theme;
        applyTheme(document, theme);
        onThemeChange?.(theme);
    };

    const syncWithSystemTheme = (systemTheme: Theme) => {
        storedTheme = getStoredTheme(storage);

        if (storedTheme === systemTheme) {
            removeStoredTheme(storage);
            storedTheme = null;
        }

        notifyThemeChange(storedTheme ?? systemTheme);
    };

    const initialSystemTheme = getSystemTheme(media);
    if (storedTheme === initialSystemTheme) {
        removeStoredTheme(storage);
        storedTheme = null;
    }

    notifyThemeChange(storedTheme ?? initialSystemTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        syncWithSystemTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleSystemThemeChange);

    return {
        get theme() {
            return currentTheme;
        },
        destroy: () => {
            media.removeEventListener("change", handleSystemThemeChange);
        },
        setTheme: (theme: Theme) => {
            const systemTheme = getSystemTheme(media);

            if (theme === systemTheme) {
                removeStoredTheme(storage);
                storedTheme = null;
            } else {
                storeTheme(storage, theme);
                storedTheme = theme;
            }

            notifyThemeChange(theme);
        },
    };
};

export const bindThemeSwitcher = () => {
    const button = document.querySelector<HTMLButtonElement>("[data-theme-switcher]");

    if (!button) {
        return;
    }

    const updateButton = (theme: Theme) => {
        const nextTheme = theme === "dark" ? "light" : "dark";

        button.textContent = `${theme === "dark" ? "Dark" : "Light"} mode`;
        button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
        button.setAttribute("aria-pressed", String(theme === "dark"));
    };

    const controller = createThemeController({ onThemeChange: updateButton });

    button.addEventListener("click", () => {
        controller.setTheme(controller.theme === "dark" ? "light" : "dark");
    });
};
