<script lang="ts">
	import { resolve } from "$app/paths";
	import { ModeWatcher, mode, setMode } from "mode-watcher";

	import "./layout.css";

	import { MoonIcon, SunIcon } from "$lib/icons";

	import { cn } from "$lib/utils";

	import * as Button from "$lib/components/ui/button";

	let { children } = $props();

	const currentYear = new Date().getFullYear();
</script>

<ModeWatcher />

<div class="mx-auto flex min-h-svh flex-col">
	<header class="flex items-center justify-between p-6">
		<a href={resolve("/")} class="rounded-sm text-xl font-bold tracking-tight" aria-label="Xurxo MF, ir ao inicio">
			<span class="text-primary">X</span>urxo<span class="text-primary">MF</span>
		</a>

		<div class="flex items-center gap-6">
			<Button.Root
				variant="ghost"
				size="icon"
				class="relative overflow-hidden"
				aria-label={mode.current === "dark" ? "Activar o modo claro" : "Activar o modo escuro"}
				aria-pressed={mode.current === "dark"}
				onclick={() => setMode(mode.current === "dark" ? "light" : "dark")}
			>
				<SunIcon
					aria-hidden="true"
					class={cn(
						"absolute animation-duration-300 animation-ease-out animation-fill-both",
						mode.current === "dark" ? "animate-out fade-out-0 zoom-out-0 -spin-out-90" : "animate-in fade-in-0 zoom-in-0 spin-in-90"
					)}
				/>

				<MoonIcon
					aria-hidden="true"
					class={cn(
						"absolute animation-duration-300 animation-ease-out animation-fill-both",
						mode.current === "dark" ? "animate-in fade-in-0 zoom-in-0 spin-in-90" : "animate-out fade-out-0 zoom-out-0 -spin-out-90"
					)}
				/>
			</Button.Root>
		</div>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="flex items-center justify-between p-6 text-muted-foreground">
		<div>
			<p class="font-medium text-foreground">Xurxo MF</p>
			<p>Desenvolvemento de software a medida.</p>
		</div>

		<p class="md:text-right">© {currentYear} Xurxo MF</p>
	</footer>
</div>
