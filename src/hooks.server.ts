import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let theme: typeof event.locals.theme = 'light';

	const themeCookie = event.cookies.get('theme');
	if (themeCookie === 'dark' || themeCookie === 'light') {
		theme = themeCookie;
	} else {
		const prefersDark = event.request.headers.get('sec-ch-prefers-color-scheme') === 'dark';
		theme = prefersDark ? 'dark' : 'light';
	}

	event.locals.theme = theme;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%theme%', theme)
	});

	return response;
};
