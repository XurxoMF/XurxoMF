<script lang="ts">
	import self from '$lib/assets/slef.webp';

	import { PHCaretDownBold } from '$lib/components/icons';
</script>

<main>
	<div class="grid min-h-[calc(100vh-3.5rem)] grid-rows-[1fr_auto] place-items-center gap-8 px-8">
		<div
			class="flex w-full flex-col items-center justify-between gap-12 md:w-4/5 lg:flex-row xl:w-2/3"
		>
			<h1
				class=" text-center text-5xl leading-18 font-extrabold lg:text-start xl:text-6xl"
				id="info"
			>
				Hi,
				<br />
				I'm <span class="text-pink-500">XurxoMF</span>!
			</h1>

			<img src={self} alt="XurxoMF" class="w-full max-w-80 shrink-0 rounded-full" />
		</div>

		<div class="flex items-center justify-center p-4">
			<PHCaretDownBold class="animate-bounce text-6xl text-pink-500" />
		</div>
	</div>
</main>
