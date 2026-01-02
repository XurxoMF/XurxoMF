import { tv } from 'tailwind-variants';

export const BADGE_CLASSES = tv({
	base: 'rounded-full border border-pink-500 bg-pink-500/30 px-1 text-xs whitespace-nowrap',
	variants: {
		element: {
			badge: 'select-none',
			link: 'cursor-pointer'
		}
	}
});
