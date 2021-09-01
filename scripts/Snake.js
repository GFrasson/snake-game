class Snake {
    acceptedMoves = Object.freeze({
        "ArrowUp": () => {
            this.changeDirection(0, -1);
        },
        "ArrowRight": () => {
            this.changeDirection(1, 0);
        },
        "ArrowDown": () => {
            this.changeDirection(0, 1);
        },
        "ArrowLeft": () => {
            this.changeDirection(-1, 0);
        }
    });

    constructor(canvasDraw, numberOfTiles, apple) {
        this.canvasDraw = canvasDraw;
        this.numberOfTiles = numberOfTiles;

        this.alive = true;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.changeDirectionQueue = [];
        this.snakeBody = [{
            x: Math.floor(this.numberOfTiles / 2),
            y: Math.floor(this.numberOfTiles / 2)
        }];

        // this.snakeBody = [];
        // for (let i = 0; i < 30; i++) {
        //     for (let j = 0; j < 28; j++) {
        //         this.snakeBody.push({x: i,y: j});
        //     }
        // }

        this.apple = apple;

        this.drawSnake();
        this.moveListener();
    }

    moveListener() {
        document.addEventListener('keydown', (event) => {
            const keyPressed = event.key;

            if (this.acceptedMoves.hasOwnProperty(keyPressed)) {
                if (this.changeDirectionQueue.length < 2) {
                    this.changeDirectionQueue.push(this.acceptedMoves[keyPressed]);
                }
            }
        });
    }

    changeDirection(xSpeed, ySpeed) {
        if (-xSpeed !== this.xSpeed && -ySpeed !== this.ySpeed) {
            this.xSpeed = xSpeed;
            this.ySpeed = ySpeed;
        }
    }

    updateSnake() {
        if (this.changeDirectionQueue.length > 0) {
            const changeDirectionFunction = this.changeDirectionQueue.shift();
            changeDirectionFunction();
        }

        const head = this.snakeBody[this.snakeBody.length - 1];
        const newHeadX = head.x + this.xSpeed;
        const newHeadY = head.y + this.ySpeed;

        // Checking if died
        if (newHeadX >= this.numberOfTiles || newHeadX < 0 || newHeadY >= this.numberOfTiles || newHeadY < 0) {
            this.alive = false;
        } else {
            for (let i = 0; i < this.snakeBody.length; i++) {
                if (this.snakeBody[i].x == newHeadX && this.snakeBody[i].y == newHeadY) {
                    this.alive = false;
                    break;
                }
            }
        }

        if (this.alive) {
            this.snakeBody.push({
                x: newHeadX,
                y: newHeadY
            });
    
            this.drawSnakeSquare(newHeadX, newHeadY);
    
            // Checking if ate apple
            if (newHeadX === this.apple.x && newHeadY === this.apple.y) {
                this.eatApple();
            } else {
                const tail = this.snakeBody.shift();
                this.clearSnakeSquare(tail.x, tail.y);
            }
        }
    }

    eatApple() {
        this.apple.eaten = true;
    }

    drawSnake() {
        for (let i = 0; i < this.snakeBody.length; i++) {
            this.drawSnakeSquare(this.snakeBody[i].x, this.snakeBody[i].y);
        }
    }

    drawSnakeSquare(x, y) {
        this.canvasDraw.drawSquare(x, y, "#555555");
    }

    clearSnakeSquare(x, y) {
        this.canvasDraw.drawSquare(x, y, "#242424");
    }
}
