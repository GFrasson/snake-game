class Apple {
    constructor(canvasDraw, numberOfTiles) {
        this.canvasDraw = canvasDraw;
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
        this.canvasDraw.drawSquare(this.x, this.y, "#990000");
    }
}