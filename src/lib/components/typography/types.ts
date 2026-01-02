import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

import type { ANCHOR_CLASSES, HEADING_CLASSES, PARAGRAPH_CLASSES, SPAN_CLASSES } from './classes';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
	Omit<VariantProps<typeof HEADING_CLASSES>, 'variant'>;

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
	VariantProps<typeof PARAGRAPH_CLASSES>;

export type SpanProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof SPAN_CLASSES>;

export type AnchorProps = HTMLAnchorAttributes & VariantProps<typeof ANCHOR_CLASSES>;
