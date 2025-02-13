class mapGen extends Phaser.Scene {
    constructor() {
        super("mapGenKey");
        this.mapWidth = 20;
        this.mapHeight = 15;
        this.cellArray = [];
    }

    preload() 
    {

    }

    create() 
    {
        console.log("mapGen Scene Loaded");

        // Regenerate on pressing R
        this.input.keyboard.on('keydown-R', this.generateMap, this);

        // Do initial Map Generation
        this.generateMap();
    }

    iniCellArray()
    {
        for (let i = 0; i < this.mapHeight; i++)
        {
            for (let j = 0; j < this.mapWidth; j++)
            {
                    this.cellArray.push(new Cell(j, i)); // j and i are the x and y in the array of the cell
            }
        }
    }

    clearCellArray()
    {
        while (this.cellArray.length > 0)
        {
            this.cellArray.pop();
        }
    }

    generateMap()
    {
        // Reset the cellArray
        this.clearCellArray();
        this.iniCellArray();

        let generating = true;
        let valid = true;

        let rx = Math.floor(Math.random() * (this.mapWidth + 1));
        let ry = Math.floor(Math.random() * (this.mapHeight + 1));

        // Randomly get the first cell to be randomly generated
        let currentCell = this.cellArray.find((cell) => (cell.x == rx) && (cell.y == ry));

        // Core map gen loop
        while (generating)
        {
            this.placeTile(currentCell);

            // check currentCell to make sure placeTile worked, if it didn't then break out of while and set valid to false
            if (currentCell.tile)
            {
                valid = false;
                break;
            }
            
            // update currentCell to either the new cell with lowest possibilities or to an unoccupied cell adjacent to currentCell
            // TODO
        }

        if (!valid) // If mapGen became impossible, restart
        {
            this.generateMap();
        }
    }

    placeTile(cell)
    {
        // Pick one of the possible cases of tile to place in cell, if there is none then don't do anything
        // TODO
    }
}

class Cell {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.occupied = false;
        this.tile;
    }

}