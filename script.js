var state = { board: [], currentGame: [], savedGames: [], };

function start() {
addNumberToGame(1);
addNumberToGame(2);
addNumberToGame(3);
addNumberToGame(4);
saveGame();
addNumberToGame(5);
addNumberToGame(60);

saveGame();

console.log(state.currentGame);
console.log(state.savedGames);
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error('Número inválido', numberToAdd);
        return;
    }//O jogo é devidamente aceito apenas se os números estiverem entre 1 e 60.

    if (state.currentGame.length >= 6) {
        console.error('O jogo já está completo!');
        return;
    } //O jogo é devidamente aceito apenas se tiver no máximo 6 números escolhidos.

    if (isNumberInGame(numberToAdd)) {
    console.error('Este Número já está em jogo.', numberToAdd);
    return;
    } //não aceita dois números iguais no mesmo jogo.(1)

    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
    if (numberToRemove < 1 || numberToRemove > 60) {
        console.error('Número Inválido', numberToRemove);
        return;
    }

    var newGame = [];

    for (var i = 0; i < state.currentGame.length; i++) {
        var currentNumber = state.currentGame[i];

        if (currentNumber === numberToRemove) {
            continue; 
        }

        newGame.push(currentNumber);
    }

    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck){
    return state.currentGame.includes(numberToCheck);
} // Lógica de validação de números (true or false) || não aceitar dois números iguais no mesmo jogo.(2)

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo não está completo!');
        return;
    }

    state.savedGames.push(state.currentGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

start();
