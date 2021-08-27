class Game {
    constructor() {
        this.numberOfTiles = 30;
        this.points = 0;
        this.intervalInMiliseconds = 50;

        this.canvasDraw = new CanvasDraw(this.numberOfTiles);
        this.board = new Board(this.canvasDraw);
        this.apple = new Apple(this.canvasDraw, this.numberOfTiles);
        this.snake = new Snake(this.canvasDraw, this.numberOfTiles, this.apple);

        this.startGame();
    }

    startGame() {
        setInterval(() => {
            this.snake.updateSnake();
        }, this.intervalInMiliseconds);
    }
}

new Game();