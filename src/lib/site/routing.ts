/**
 * Converts a root-relative Paraglide URL into the base-relative path expected by
 * SvelteKit's `resolve()`. Locale-prefixed paths are created at runtime by the
 * reroute hook, so they are intentionally outside SvelteKit's generated path union.
 */
export function toResolvablePath(pathname: string): "" {
	return pathname.replace(/^\/+/, "") as "";
}
