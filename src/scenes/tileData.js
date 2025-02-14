class TileData extends Phaser.Scene {
    constructor() {
        super("tileDataScene")
    }

    preload(){
        this.load.path = "./assets/"
        this.preload.spritesheet("tiles", "tiles/mapPack_tilesheet.png", {
            frameWidth: 32,
            frameHeight: 32
        })
    }

    create(){

        this.TILE_TYPES = {
            GRASS: "0000",
            WATER: "1111",
            Grass_to_Water_Top_Left: "0011",
            Grass_to_Water_Top_Right: "1100",
            Grass_to_Water_Bottom_Left: "0001",
            Grass_to_Water_Bottom_Right: "1000",
            Grass_to_Water_Left: "0010",
            Grass_to_Water_Right: "0100",
        }

        this.TILE_ADJACENCY = {
            "0000": {
                top: ["0000", "0011", "1100"],
                bottom: ["0000", "0001", "1000"],
                left: ["0000", "0010"],
                right: ["0000", "0100"]
            },
            "1111": {
                top: ["1111"],
                bottom: ["1111"],
                left: ["1111"],
                right: ["1111"]
            },
            "0011": {
                top: ["0000"],
                left: ["0000"],
                bottom: ["1111"],
                right: ["1111"]
            },
            "1100": {
                top: ["0000"],
                right: ["0000"],
                bottom: ["1111"],
                left: ["1111"]
            },
            "0001": {
                bottom: ["0000"],
                left: ["0000"],
                top: ["1111"],
                right: ["1111"]
            },
            "1000": {
                bottom: ["0000"],
                right: ["0000"],
                top: ["1111"],
                left: ["1111"]
            },
            "0010": {
                left: ["0000"],
                right: ["1111"],
                top: ["0000", "0011"],
                bottom: ["0000", "0001"]
            },
            "0100": {
                right: ["0000"],
                left: ["1111"],
                top: ["0000", "1100"],
                bottom: ["0000", "1000"]
            }
        }
    }
}