const newGame = new Game();

function startGame() {
    const startingScreen = document.querySelector("#starting-screen");
    const gameContainer = document.querySelector(".game-container");
    const difficulty = document.querySelector("#difficulty");
    const difficultySelection = difficulty.querySelectorAll('.difficulty-selection');
    let chosenDifficulty = 'EASY';
    
    for (let i = 0; i < difficultySelection.length; i++) {
        if (difficultySelection[i].checked) {
            chosenDifficulty = difficultySelection[i].value;
            break;
        }
    }

    startingScreen.style.display = 'none';
    gameContainer.style.display = 'inline-block';

    newGame.startGame(chosenDifficulty);
}
