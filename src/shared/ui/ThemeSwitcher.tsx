import headerStyles from "./header.module.css";

export const ThemeSwitcher = () => (
    <button aria-label="Switch theme" className={headerStyles["theme-switcher"]} data-theme-switcher type="button">
        Theme
    </button>
);
