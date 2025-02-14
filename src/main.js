"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 1280,
    height: 800,
    scene: [TileData]
}

// you can define global variables here
const GAME = new Phaser.Game(config);