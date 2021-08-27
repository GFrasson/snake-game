class Game {
    constructor() {
        this.points = 0;
        this.canvas = document.querySelector("#game");
        this.ctx = this.canvas.getContext("2d");

        const numberOfTiles = 30;
        const tileSize = this.canvas.width / numberOfTiles;

        this.board = new Board(this.ctx, this.canvas.width, this.canvas.height, tileSize, numberOfTiles);
        this.apple = new Apple(this.ctx, tileSize, numberOfTiles);
        this.snake = new Snake(this.ctx, tileSize, this.apple);

        this.runGame();
    }

    runGame() {
        const intervalInMiliseconds = 60;
        setInterval(() => {
            this.snake.updateSnake();
            this.board.drawBoard();
            this.apple.drawApple();
            this.snake.drawSnake();
        }, intervalInMiliseconds);
    }
}

new Game();