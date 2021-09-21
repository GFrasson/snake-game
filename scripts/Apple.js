class Apple {
    constructor(canvasDraw, numberOfTiles) {
        this.canvasDraw = canvasDraw;
        this.numberOfTiles = numberOfTiles;

        this.eaten = false;
        this.x = (Math.floor(this.numberOfTiles / 2)) - 1;
        this.y = (Math.floor(this.numberOfTiles / 2)) - 1;

        this.drawApple();
    }

    randomizePositions(snake) {
        let availablePositionFound = false;

        while (!availablePositionFound) {
            this.x = Math.floor(Math.random() * this.numberOfTiles);
            this.y = Math.floor(Math.random() * this.numberOfTiles);
            availablePositionFound = true;

            for (let i = 0; i < snake.snakeBody.length; i++) {
                if (snake.snakeBody[i].x == this.x && snake.snakeBody[i].y == this.y) {
                    availablePositionFound = false;
                    break;
                }
            }
        }

        this.eaten = false;
    }

    drawApple() {
        this.canvasDraw.drawSquare(this.x, this.y, "#990000");
    }
}