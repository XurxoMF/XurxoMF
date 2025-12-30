export type Themes = 'light' | 'dark';

export const THEME_KEY = 'theme';

let theme: Themes = $state('light');

/**
 * Toggles the current theme between light and dark.
 */
export function toggleTheme() {
	setTheme(theme === 'light' ? 'dark' : 'light');
}

/**
 * Set the theme.
 * @param newTheme The new theme to apply
 */
export function setTheme(newTheme: Themes) {
	theme = newTheme;
	document.documentElement.dataset.theme = theme;
	localStorage.setItem(THEME_KEY, theme);
}

/**
 * Get the theme.
 * @returns The current theme.
 */
export function getTheme(): Themes {
	return theme;
}
