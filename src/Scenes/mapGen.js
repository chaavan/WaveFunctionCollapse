class mapGen extends Phaser.Scene {
    constructor() {
        super("mapGenKey");
    }

    preload() 
    {

    }

    create() 
    {
        console.log("mapGen Scene Loaded");

        // Regenerate on pressing R
        this.input.keyboard.on('keydown-R', this.regenerate, this);

        // Do initial Map Generation
        this.generateMap();
    }

    regenerate()
    {

    }

    generateMap()
    {
        
    }
}