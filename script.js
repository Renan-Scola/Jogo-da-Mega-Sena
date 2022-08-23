var state = { board: [], currentGame: [], savedGames: [], };

function start() {
/*addNumberToGame(1);addNumberToGame(2);addNumberToGame(3);addNumberToGame(4);saveGame();addNumberToGame(5);addNumberToGame(60);saveGame();resetGame();console.log(state.currentGame);console.log(state.savedGames);*/

createBoard();
newGame();

console.log(state.board);
}

function createBoard() {
    state.board = [];

    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    } // criando números de 1 a 60 no console.
} //replicando a interface para o usuário.

function newGame() {
resetGame();
render();


console.log(state.currentGame);
}

function render() {
    renderBoard();
    renderButtons();
    renderSavedGames();
}

function renderBoard() {
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = ''; //zerando a aplicação html

    var ulNumbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li');
        liNumber.textContent = currentNumber;

        liNumber.addEventListener('click', handleNumberClick);

        ulNumbers.appendChild(liNumber);
    } // Looping criado com interação html do site, para expor os números que podem ser jogados.

    divBoard.appendChild(ulNumbers); //push da aplicação para que ela seja visivel para o usuário.
}

function handleNumberClick(event) {
    var value = Number(event.currentTarget.textContent);

    if (isNumberInGame(value)) {
        removeNumberFromGame(value);
    } else {
        addNumberToGame(value);
    } // selecionar número para colocar in game, caso o mesmo já estar selecionado, remove-lo.

    console.log(state.currentGame);
}//retornar o número clicado.

function renderSavedGames() {

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

function renderButtons() {
    var divButtons = document.querySelector('#megasena-buttons');
    divButtons.innerHTML = '';
    
    var buttonNewGame = createNewGameButton();
    var buttonRandomGame = createRandomGameButton();
    var buttonSaveGame = createSaveGameButton();

    divButtons.appendChild(buttonNewGame);
    divButtons.appendChild(buttonRandomGame);
    divButtons.appendChild(buttonSaveGame);
}//rederiza os botões save, new e random.

function createSaveGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Salvar Jogo';

    button.addEventListener('click', saveGame);

    return button;
}//funcionalidade

function createRandomGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Jogo Aleatório';

    button.addEventListener('click', randomGame);

    return button;
}//criando botão randomGame

function createNewGameButton() {
    var button = document.createElement('button');
    button.textContent = 'Novo Jogo';

    button.addEventListener('click', newGame);

    return button;
}// criando botão newGame

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
        } // Função que valida número por número, se o número for igual a XXX...

        newGame.push(currentNumber); //... ele não irá passar pela validação.
    }

    state.currentGame = newGame;
} // Remover número de selção.

function isNumberInGame(numberToCheck){
    return state.currentGame.includes(numberToCheck);
} // Lógica de validação de números (true or false) || não aceitar dois números iguais no mesmo jogo.(2)

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo não está completo!');
        return;
    } // função para avisar ao usuário se o jogo está completo ou não.

    state.savedGames.push(state.currentGame); //caso o jogo estiver completo, ele irá levá-lo ao savedGames.

    console.log(state.savedGames);
}

function isGameComplete() {
    return state.currentGame.length === 6;
} // função para verificar se o jogo está completo.

function resetGame() {
    state.currentGame = [];
} // resetar o jogo.

function randomGame() {
    resetGame();

    while(!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60); //ceil == arrenda o número para cima. random == escolhe um número entre 0,00 e 1.
    addNumberToGame(randomNumber);
    }// laço de repetição. "enquento o jogo não estiver completo, adicione mais um número a ele."

    console.log(state.currentGame);
} //regras 

start();
