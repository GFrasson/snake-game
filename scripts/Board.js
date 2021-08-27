class Board {
    constructor(canvasDraw) {
        this.canvasDraw = canvasDraw;
        this.drawBoard();
    }

    drawBoard() {
        this.canvasDraw.drawBackgroundBoard();
        this.canvasDraw.drawVerticalLinesBoard();
        this.canvasDraw.drawHorizontalLinesBoard();
    }
}