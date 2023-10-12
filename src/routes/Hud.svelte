<script lang="ts">
	import { fishCount } from '$lib/stores';
	let count = 0;
</script>

<!-- NOTE: add `pointer-event-auto` to anything you need to be clickable here. -->

<div class="flex justify-between p-4">
	<p class="p">some sort of hud stuff goes here</p>
	<a
		href="https://github.com/seltzerfish/phaser-svelte-template"
		class="btn variant-filled-primary pointer-events-auto">Get the template 🔗</a
	>
</div>

<div class="w-full flex justify-center">
	<div class="flex flex-col">
		<h2 class="h2 py-2">fish count: {$fishCount}</h2>
		<div class="flex flex-col pointer-events-auto">
			<input type="range" min="0" max="40" bind:value={$fishCount} class=" py-4" />
			<div class="flex justify-center">
				<button on:click={() => ($fishCount -= 1)} class="btn-icon variant-filled mx-2">-</button>
				<button on:click={() => ($fishCount += 1)} class="btn-icon variant-filled mx-2">+</button>
			</div>
		</div>
	</div>
</div>

<div class="fixed bottom-6 right-6" />
