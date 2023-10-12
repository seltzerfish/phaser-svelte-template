export default class PreloaderScene extends Phaser.Scene {
	constructor() {
		super('preloader');
	}

	preload() {
		// add stuff to load here 👇
		const loaders: (() => void)[] = [
			// () => {
			// 	this.load.image('sprite_name', 'path/to/sprite_name.png');
			// }
		];

		this.loadAndSendUpdates(loaders);
	}

	private loadAndSendUpdates(preloadList: (() => void)[]) {
		const totalToLoad = preloadList.length;
		let loadedCount = 0;

		// Listen for the 'filecomplete' event and update the progress
		this.load.on('filecomplete', () => {
			loadedCount++;
			const percentageComplete = loadedCount / totalToLoad;
			this.scene.get('splash').events.emit('set_loader_progress', percentageComplete);
		});

		// Trigger the load process
		preloadList.forEach((load) => load());
	}

	create() {
		this.scene.get('splash').events.emit('set_loader_progress', 1);
		this.time.delayedCall(50, () => {
			this.scene.stop('splash');
			this.scene.start('main');
		});
	}
}
