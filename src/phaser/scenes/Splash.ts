export default class extends Phaser.Scene {
	private progressBar!: Phaser.GameObjects.Graphics;

	constructor() {
		super('splash');
	}

	preload() {
		this.load.image('logo', 'favicon.png');
	}

	create() {
		const W = this.scale.width;
		const H = this.scale.height;

		const logo = this.add.image(Math.round(W / 2), Math.round(H / 3), 'logo');
		logo.texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
		logo.setScale(2);

		this.add
			.graphics()
			.lineStyle(8, 0xffb300)
			.strokeRect(W / 4, H / 2, W / 2, H / 16);

		this.progressBar = this.add.graphics();

		this.events.on('set_loader_progress', (progress: number) => {
			const barWidth = (W / 2 - 20) * progress;
			this.progressBar
				.clear()
				.fillStyle(0xffcb51, 1)
				.fillRect(W / 4 + 10, H / 2 + 10, barWidth, H / 16 - 20);
		});
		this.scene.run('preloader');
	}

	update() {}
}
