class Snake {
    // acceptedMoves = Object.freeze({
    //     ArrowUp() {
    //         console.log('up');
    //         this.move(0, 1);
    //     },
    //     ArrowRight() {
    //         console.log('right');
    //         this.move(1, 0);
    //     },
    //     ArrowDown() {
    //         console.log('down');
    //         this.move(0, -1);
    //     },
    //     ArrowLeft() {
    //         console.log('left');
    //         this.move(-1, 0);
    //     }
    // });

    constructor(context, tileSize, apple) {
        this.ctx = context;

        this.xSpeed = 1;
        this.ySpeed = 0;
        this.snakeBody = [{
            x: 14,
            y: 14
        }];

        this.tileSize = tileSize;
        this.apple = apple;

        this.drawSnake();
        this.moveListener();
    }

    moveListener() {
        document.addEventListener('keydown', (event) => {
            const keyPressed = event.key;

            // const moveFunction = this.acceptedMoves[keyPressed];

            // if (moveFunction) {
            //     moveFunction();
            // }

            if (keyPressed === 'ArrowUp') {
                this.move(0, -1);
            } else if (keyPressed === 'ArrowRight') {
                this.move(1, 0);
            } else if (keyPressed === 'ArrowDown') {
                this.move(0, 1);
            } else if (keyPressed === 'ArrowLeft') {
                this.move(-1, 0);
            }
        });
    }

    move(xSpeed, ySpeed) {
        if (-xSpeed !== this.xSpeed && -ySpeed !== this.ySpeed) {
            this.xSpeed = xSpeed;
            this.ySpeed = ySpeed;
        }
    }

    updateSnake() {
        const head = this.snakeBody[this.snakeBody.length - 1];
        const newHeadX = head.x + this.xSpeed;
        const newHeadY = head.y + this.ySpeed;

        this.snakeBody.push({
            x: newHeadX,
            y: newHeadY
        });

        this.drawSnakeSquare(newHeadX, newHeadY);

        // Checking if ate food
        if (newHeadX === this.apple.x && newHeadY === this.apple.y) {
            this.apple.randomizePositions();
        } else {
            const tail = this.snakeBody.shift();
            this.clearSnakeSquare(tail.x, tail.y);
        }
    }

    drawSnake() {
        // this.drawSnakeSquare(this.xHead, this.yHead);

        for (let i = 0; i < this.snakeBody.length; i++) {
            this.drawSnakeSquare(this.snakeBody[i].x, this.snakeBody[i].y);
        }
    }

    drawSnakeSquare(x, y) {
        const strokeSize = 2;

        this.ctx.beginPath();
        this.ctx.fillStyle = '#555555';
        this.ctx.fillRect(
            x * this.tileSize + strokeSize / 2, 
            y * this.tileSize + strokeSize / 2, 
            this.tileSize - strokeSize, 
            this.tileSize - strokeSize
        );
        this.ctx.closePath();
    }

    clearSnakeSquare(x, y) {
        const strokeSize = 2;

        this.ctx.beginPath();
        this.ctx.fillStyle = '#242424';
        this.ctx.fillRect(
            x * this.tileSize + strokeSize / 2, 
            y * this.tileSize + strokeSize / 2, 
            this.tileSize - strokeSize, 
            this.tileSize - strokeSize
        );
        this.ctx.closePath();
    }
}
