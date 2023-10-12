<script lang="ts">
	import Phaser from 'phaser';
	import { config } from '../phaser/main';

	import { onMount } from 'svelte';
	import Hud from './Hud.svelte';
	let gameContainer: HTMLCanvasElement;

	onMount(async () => {
		config.canvas = gameContainer;
		const game = new Phaser.Game(config);

		window.addEventListener('resize', () => {
			game.scale.resize(window.innerWidth, window.innerHeight);
		});
	});
</script>

<div class="fixed top-0 left-0">
	<canvas bind:this={gameContainer} width={window.innerWidth} height={window.innerHeight} />
</div>

<div class="fixed top-0 left-0 pointer-events-none touch-none">
	<div class="h-screen w-screen">
		<Hud />
	</div>
</div>
