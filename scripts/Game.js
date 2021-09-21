class Game {
    difficultiesConfigurations = Object.freeze({
        EASY: {
            numberOfTiles: 10,
            intervalInMiliseconds: 100
        },
        MEDIUM: {
            numberOfTiles: 15,
            intervalInMiliseconds: 85
        },
        HARD: {
            numberOfTiles: 20,
            intervalInMiliseconds: 63
        },
        EXPERT: {
            numberOfTiles: 30,
            intervalInMiliseconds: 50
        },
    });

    constructor() {
        this.score = 0;
        this.highestScore = 0;

        this.scoreHTML = document.querySelector('#score');
        this.highestScoreHTML = document.querySelector('#highest-score');
    }

    startGame(difficulty) {
        // Difficulty configurations
        if (this.difficultiesConfigurations.hasOwnProperty(difficulty)) {
            this.numberOfTiles = this.difficultiesConfigurations[difficulty].numberOfTiles;
            this.intervalInMiliseconds = this.difficultiesConfigurations[difficulty].intervalInMiliseconds;
        } else {
            this.numberOfTiles = this.difficultiesConfigurations.EASY.numberOfTiles;
            this.intervalInMiliseconds = this.difficultiesConfigurations.EASY.intervalInMiliseconds;
        }

        // Instances
        this.canvasDraw = new CanvasDraw(this.numberOfTiles);
        this.board = new Board(this.canvasDraw);
        this.apple = new Apple(this.canvasDraw, this.numberOfTiles);
        this.snake = new Snake(this.canvasDraw, this.numberOfTiles, this.apple);

        // Game run
        this.gameInterval = setInterval(() => {
            this.snake.updateSnake();
           
            if (!this.snake.alive) {
                this.endGame();
            }

            if (this.apple.eaten) {
                this.score++;
                this.scoreHTML.innerHTML = this.score;

                if (this.score > this.highestScore) {
                    this.highestScore++;
                    this.highestScoreHTML.innerHTML = this.highestScore;
                }

                this.apple.randomizePositions(this.snake);
                this.apple.drawApple();
            }
        }, this.intervalInMiliseconds);
    }

    endGame() {
        clearInterval(this.gameInterval);
        this.score = 0;

        // const restartGameButton = document.querySelector('#restart-game');
        // restartGameButton.style.display = 'inline';       
    }
}