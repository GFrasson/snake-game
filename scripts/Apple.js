class Apple {
    constructor(context, tileSize, numberOfTiles) {
        this.ctx = context;
        this.tileSize = tileSize;
        this.numberOfTiles = numberOfTiles;
        this.x = 0;
        this.y = 0;
        this.randomizePositions();

        this.drawApple();
    }

    randomizePositions() {
        this.x = Math.floor(Math.random() * this.numberOfTiles);
        this.y = Math.floor(Math.random() * this.numberOfTiles);
    }

    drawApple() {
        const strokeSize = 2;

        this.ctx.beginPath();
        this.ctx.fillStyle = '#990000';
        this.ctx.fillRect(
            this.x * this.tileSize + strokeSize / 2, 
            this.y * this.tileSize + strokeSize / 2, 
            this.tileSize - strokeSize, 
            this.tileSize - strokeSize
        );
        this.ctx.closePath();
    }
}