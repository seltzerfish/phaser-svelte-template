import Phaser from 'phaser';

import LoadingSplash from './scenes/Splash';
import PreloaderScene from './scenes/PreloaderScene';
import GameScene from './scenes/GameScene';

export const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.WEBGL,
	width: window.innerWidth,
	height: window.innerHeight,
	physics: {
		default: 'matter',
		matter: {
			autoUpdate: false,
			debug: true,
			setBounds: true,
			gravity: {
				x: 0,
				y: 0.2
			}
		}
	},
	pixelArt: true,
	// backgroundColor: '#295191',
	transparent: true,
	scale: {
		mode: Phaser.Scale.NONE
	},

	scene: [LoadingSplash, PreloaderScene, GameScene]
};
