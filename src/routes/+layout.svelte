<script lang="ts">
	import { resolve } from "$app/paths";
	import { ModeWatcher, mode, setMode } from "mode-watcher";
	import { goto } from "$app/navigation";

	import "./layout.css";

	import { MoonIcon, SidebarIcon, SunIcon } from "$lib/icons";

	import { cn } from "$lib/utils";

	import * as Button from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";

	let { children } = $props();

	let mobileMenuOpen = $state(false);

	const currentYear = new Date().getFullYear();
</script>

<ModeWatcher />

<div class="flex min-h-svh flex-col">
	<header class="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
		<div class="flex h-16 w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
			<a href={resolve("/")} class="rounded-sm text-lg font-semibold tracking-tight" aria-label="Xurxo MF, ir ao inicio">
				<span class="text-primary">X</span>urxo<span class="text-primary">MF</span>
			</a>

			<div class="flex items-center gap-2 md:gap-6">
				<nav class="flex gap-2" aria-label="Navegación">
					<Button.Root variant="ghost" onclick={() => goto(resolve("/servizos"))}>Servizos</Button.Root>
					<Button.Root variant="ghost" onclick={() => goto(resolve("/proxectos"))}>Proxectos</Button.Root>
					<Button.Root variant="ghost" onclick={() => goto(resolve("/noticias"))}>Noticias</Button.Root>
					<Button.Root variant="ghost" onclick={() => goto(resolve("/contacto"))}>Contacto</Button.Root>
				</nav>

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

				<div class="md:hidden">
					<Sheet.Root bind:open={mobileMenuOpen}>
						<Sheet.Trigger>
							{#snippet child({ props })}
								<Button.Root {...props} variant="ghost" size="icon" aria-label="Abrir o menú de navegación">
									<SidebarIcon aria-hidden="true" />
								</Button.Root>
							{/snippet}
						</Sheet.Trigger>

						<Sheet.Content side="right" class="w-[min(22rem,85vw)] sm:max-w-none">
							<Sheet.Header>
								<Sheet.Title>Navegación</Sheet.Title>
							</Sheet.Header>

							<a class="transition-colors hover:text-foreground" href={resolve("/servizos")}>Servizos</a>
							<a class="transition-colors hover:text-foreground" href={resolve("/proxectos")}>Proxectos</a>
							<a class="transition-colors hover:text-foreground" href={resolve("/noticias")}>Noticias</a>
							<a class="transition-colors hover:text-foreground" href={resolve("/contacto")}>Contacto</a>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t">
		<div class="flex w-full flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
			<div>
				<p class="font-medium text-foreground">Xurxo MF</p>
				<p>Deseño e desenvolvemento de solucións web.</p>
			</div>

			<nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navegación do pé de páxina">
				<a class="transition-colors hover:text-foreground" href={resolve("/servizos")}>Servizos</a>
				<a class="transition-colors hover:text-foreground" href={resolve("/proxectos")}>Proxectos</a>
				<a class="transition-colors hover:text-foreground" href={resolve("/noticias")}>Noticias</a>
				<a class="transition-colors hover:text-foreground" href={resolve("/contacto")}>Contacto</a>
			</nav>

			<p class="md:text-right">© {currentYear} Xurxo MF</p>
		</div>
	</footer>
</div>
