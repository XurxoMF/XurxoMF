import { SvelteDate } from 'svelte/reactivity';

export type Themes = 'light' | 'dark';

export const THEME_COOKIE = 'theme';

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
	setCookie(THEME_COOKIE, theme);
}

/**
 * Get the theme.
 * @returns The current theme.
 */
export function getTheme(): Themes {
	return theme;
}

/**
 * Gets a cookie value by its name.
 * @param name The name of the cookie
 * @returns The value of the cookie, or null if it doesn't exist
 */
export function getCookie(name: string) {
	const value = document.cookie.split('; ').find((row) => row.startsWith(name + '='));
	return value ? decodeURIComponent(value.split('=')[1]) : null;
}

/**
 * Sets a cookie with the given name, value and expiration date.
 * @param name The name of the cookie.
 * @param value The value of the cookie.
 * @param days The number of days until the cookie expires.
 */
export function setCookie(name: string, value: string, days = 365): void {
	const expires = new SvelteDate(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}
