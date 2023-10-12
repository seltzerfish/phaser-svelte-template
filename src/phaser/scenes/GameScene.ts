import { get } from 'svelte/store';
import { fishCount } from '$lib/stores';

export default class GameScene extends Phaser.Scene {
	private fish: Phaser.Physics.Matter.Image[] = [];
	constructor() {
		super('main');
	}

	create() {
		console.log('hello world');
		this.updateNumSpawns(get(fishCount));
		fishCount.subscribe((count) => {
			this.updateNumSpawns(count);
		});
		this.matter.add.mouseSpring();
	}

	private updateNumSpawns(count: number) {
		if (count > this.fish.length) {
			for (let i = 0; i < count - this.fish.length; i++) {
				this.spawnFish();
			}
		} else if (count < this.fish.length) {
			for (let i = 0; i < this.fish.length - count; i++) {
				this.removeFish();
			}
		}
	}

	private spawnFish() {
		const fish = this.matter.add
			.image(100, 100, 'logo') // just using my favicon here
			.setRectangle(48, 24)
			.setBounce(0.5)
			.setVelocity(10, 0)
			.setScale(2);
		this.fish.push(fish);
	}

	private removeFish() {
		const fish = this.fish.pop();
		if (fish) {
			fish.destroy();
		}
	}

	private physicsClock = 0;
	private readonly fps = 144;
	update(time: number, delta: number): void {
		this.physicsClock += delta;
		const frameLengthMs = 1000 / this.fps;
		while (this.physicsClock > frameLengthMs) {
			this.physicsClock -= frameLengthMs;
			this.matter.world.step(frameLengthMs);
		}
	}
}
