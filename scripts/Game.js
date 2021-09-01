class Game {
    constructor() {
        this.numberOfTiles = 30;
        this.points = 0;
        this.intervalInMiliseconds = 50;

        this.canvasDraw = new CanvasDraw(this.numberOfTiles);
        this.board = new Board(this.canvasDraw);
        this.apple = new Apple(this.canvasDraw, this.numberOfTiles);
        this.snake = new Snake(this.canvasDraw, this.numberOfTiles, this.apple);
        this.state = new State(this.apple, this.snake);

        this.startGame();
    }

    startGame() {
        this.gameInterval = setInterval(() => {
            this.snake.updateSnake();
            // console.log(1);
           
            if (!this.snake.alive) {
                this.endGame();
            }

            if (this.apple.eaten) {
                this.apple.randomizePositions();
                this.apple.drawApple();
            }
        }, this.intervalInMiliseconds);
    }

    endGame() {
        clearInterval(this.gameInterval);
    }
}

new Game();