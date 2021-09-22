const game = new Game();

function startGame() {
    const difficulty = document.querySelector("#difficulty");
    const difficultySelection = difficulty.querySelectorAll('.difficulty-selection');
    let chosenDifficulty = 'EASY';
    
    for (let i = 0; i < difficultySelection.length; i++) {
        if (difficultySelection[i].checked) {
            chosenDifficulty = difficultySelection[i].value;
            break;
        }
    }

    hideStartingScreen();
    showGameContainer();

    game.startGame(chosenDifficulty);
}

function restartGame() {
    hideGameOverScreen();
    resetScore();
    game.restartGame();
}

function quitGame() {
    hideGameOverScreen();
    hideGameContainer();
    showStartingScreen();
    resetScore();
    game.quitGame();
}

function resetScore() {
    const score = document.querySelector('#score');
    score.innerHTML = 0;
}

function hideGameOverScreen() {
    const gameOverScreen = document.querySelector('#game-over-screen');
    gameOverScreen.style.display = 'none';
}

function showGameContainer() {
    const gameContainer = document.querySelector(".game-container");
    gameContainer.style.display = 'inline-block';
}

function hideGameContainer() {
    const gameContainer = document.querySelector(".game-container");
    gameContainer.style.display = 'none';
}

function showStartingScreen() {
    const startingScreen = document.querySelector("#starting-screen");
    startingScreen.style.display = 'flex';
}

function hideStartingScreen() {
    const startingScreen = document.querySelector("#starting-screen");
    startingScreen.style.display = 'none';
}

