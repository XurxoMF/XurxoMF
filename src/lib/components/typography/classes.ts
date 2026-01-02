import { tv } from 'tailwind-variants';

export const HEADING_CLASSES = tv({
	base: 'font-bold',
	variants: {
		variant: {
			h1: 'text-4xl lg:text-5xl',
			h2: 'text-3xl lg:text-4xl',
			h3: 'text-2xl lg:text-3xl',
			h4: 'text-xl lg:text-2xl',
			h5: 'text-lg lg:text-xl',
			h6: 'text-base lg:text-lg'
		},
		color: {
			primary: 'text-current',
			secondary: 'text-pink-500',
			muted: 'text-zinc-500'
		}
	}
});

export const PARAGRAPH_CLASSES = tv({
	variants: {
		color: {
			primary: 'text-current',
			secondary: 'text-pink-500',
			muted: 'text-zinc-500'
		}
	}
});

export const SPAN_CLASSES = tv({
	variants: {
		color: {
			primary: 'text-current',
			secondary: 'text-pink-500',
			muted: 'text-zinc-500'
		}
	}
});

export const ANCHOR_CLASSES = tv({
	base: 'inline-flex items-center justify-center gap-1',
	variants: {
		color: {
			primary: 'text-current',
			secondary: 'text-pink-500',
			muted: 'text-zinc-500'
		}
	}
});
