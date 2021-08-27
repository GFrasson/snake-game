class CanvasDraw {
    constructor(numberOfTiles) {
        this.canvas = document.querySelector("#game");
        this.ctx = this.canvas.getContext("2d");

        this.numberOfTiles = numberOfTiles;
        this.tileSize = this.canvas.width / numberOfTiles;
        this.strokeSize = 2;
    }

    drawSquare(x, y, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x * this.tileSize + this.strokeSize / 2, 
            y * this.tileSize + this.strokeSize / 2, 
            this.tileSize - this.strokeSize, 
            this.tileSize - this.strokeSize
        );
        this.ctx.closePath();
    }

    // ---------------------------------------------

    drawBackgroundBoard() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#242424';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
    }

    drawVerticalLinesBoard() {
        for (let i = 0; i < this.numberOfTiles; i++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#131313';
            this.ctx.lineWidth = this.strokeSize;
            this.ctx.moveTo(i * this.tileSize, 0);
            this.ctx.lineTo(i * this.tileSize, i * this.canvas.height);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    drawHorizontalLinesBoard() {
        for (let i = 0; i < this.numberOfTiles; i++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#131313';
            this.ctx.lineWidth = this.strokeSize;
            this.ctx.moveTo(0, i * this.tileSize);
            this.ctx.lineTo(i * this.canvas.width, i * this.tileSize);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}