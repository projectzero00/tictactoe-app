const cells = document.querySelectorAll('.cell')
const rows = document.querySelectorAll('.row')
const scoreP1 = document.querySelector('#placarP1')
const scoreP2 = document.querySelector('#placarP2')
const resetBtn = document.querySelector('#reset')
let game = []
let winP1 = 0
let winP2 = 0

//populate the array with divs
const loading = () => {
    switch (game.length) {
        case 0:
        case 1:
        case 2:
            let rowArray = []
            for (let i = 0; i < 9; i++) {
                if (rowArray.length < 3) {
                    rowArray.push(cells[i])
                } else {
                    game.push(rowArray)
                    rowArray = []
                    rowArray.push(cells[i])
                }
            }
            game.push(rowArray)
            break;
    }
}

const resetwin = () => {
    game = []
    loading()
    player1 = true
    player2 = false
    cells.forEach(element => {
        element.innerHTML = ''
    });

}

window.onload = loading

let player1 = true
let player2 = false

function verifyWin(table) {
    const lines = [
        [[0, 0], [0, 1], [0, 2]], // first line
        [[1, 0], [1, 1], [1, 2]], // second line
        [[2, 0], [2, 1], [2, 2]], // third line
        [[0, 0], [1, 0], [2, 0]], // first column
        [[0, 1], [1, 1], [2, 1]], // second column
        [[0, 2], [1, 2], [2, 2]], // third column
        [[0, 0], [1, 1], [2, 2]], // first diagonal
        [[0, 2], [1, 1], [2, 0]]  // second diagonal
    ];

    // Check all rows, columns and diagonals to see if there is a winner
    for (let line of lines) {
        const [a, b, c] = line;
        if (
            table[a[0]][a[1]] &&
            table[a[0]][a[1]] === table[b[0]][b[1]] &&
            table[a[0]][a[1]] === table[c[0]][c[1]]
        ) {
            return table[a[0]][a[1]]; // returns the symbol (X or O) of the winner
        }
    }

    return null; // returns null if there is no winner
}



rows.forEach((row, rowIndex) => {
    row.addEventListener('click', (e) => {
        const cellsInRow = row.querySelectorAll('.cell')
        const selectedCellIndex = Array.from(cellsInRow).indexOf(e.target)
        if (player1) {
            cellsInRow[selectedCellIndex].innerHTML = `<p class="playerMove">X</p>`
            player1 = false
            player2 = true
            game[rowIndex][selectedCellIndex] = 'X'
        } else {
            cellsInRow[selectedCellIndex].innerHTML = `<p class="playerMove">O</p>`
            player1 = true
            player2 = false
            game[rowIndex][selectedCellIndex] = 'O'

        }

        if (verifyWin(game) === 'X') {
            winP1++
            scoreP1.innerHTML = `Player 1: ${winP1}`
            
            resetwin()
        } else if( verifyWin(game) === 'O'){
            winP2++
            scoreP2.innerHTML = `Player 2: ${winP2}`
            resetwin()
        }
    })
});


resetBtn.addEventListener('click', () => {
    resetwin()
    winP1 = 0
    winP2 = 0
    scoreP1.innerHTML = `Player 1: ${winP1}`
    scoreP2.innerHTML = `Player 2: ${winP2}` 
})













