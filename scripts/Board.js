class Board {
    constructor(context, canvasWidth, canvasHeight, tileSize, numberOfTiles) {
        this.ctx = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.tileSize = tileSize;
        this.numberOfTiles = numberOfTiles;
    }

    drawBoard() {
        // Background
        this.ctx.beginPath();
        this.ctx.fillStyle = '#242424';
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.closePath();

        // Vertical lines
        for (let i = 0; i < this.canvasWidth / this.tileSize; i++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#131313';
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(i * this.tileSize, 0);
            this.ctx.lineTo(i * this.tileSize, i * this.canvasHeight);
            this.ctx.stroke();
            this.ctx.closePath();
        }

        // Horizontal lines
        for (let i = 0; i < this.canvasHeight / this.tileSize; i++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#131313';
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(0, i * this.tileSize);
            this.ctx.lineTo(i * this.canvasWidth, i * this.tileSize);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}