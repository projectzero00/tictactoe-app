const cells = document.querySelectorAll('.cell')
const rows = document.querySelectorAll('.row')
const scoreP1 = document.querySelector('#placarP1')
const scoreP2 = document.querySelector('#placarP2')
const resetBtn = document.querySelector('#reset')
let game = []
let winP1 = 0
let winP2 = 0

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

function verificarGanhador(tabuleiro) {
    const linhas = [
        [[0, 0], [0, 1], [0, 2]], // primeira linha
        [[1, 0], [1, 1], [1, 2]], // segunda linha
        [[2, 0], [2, 1], [2, 2]], // terceira linha
        [[0, 0], [1, 0], [2, 0]], // primeira coluna
        [[0, 1], [1, 1], [2, 1]], // segunda coluna
        [[0, 2], [1, 2], [2, 2]], // terceira coluna
        [[0, 0], [1, 1], [2, 2]], // diagonal principal
        [[0, 2], [1, 1], [2, 0]]  // diagonal secundária
    ];

    // Verifique todas as linhas, colunas e diagonais para ver se há um ganhador
    for (let linha of linhas) {
        const [a, b, c] = linha;
        if (
            tabuleiro[a[0]][a[1]] &&
            tabuleiro[a[0]][a[1]] === tabuleiro[b[0]][b[1]] &&
            tabuleiro[a[0]][a[1]] === tabuleiro[c[0]][c[1]]
        ) {
            return tabuleiro[a[0]][a[1]]; // retorna o símbolo (X ou O) do ganhador
        }
    }

    return null; // retorna null se não houver ganhador
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

        if (verificarGanhador(game) === 'X') {
            winP1++
            scoreP1.innerHTML = `Player 1: ${winP1}`
            
            resetwin()
        } else if(verificarGanhador(game) === 'O'){
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







// newarray = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ]
// rows.forEach((row, rowIndex) => {

//     row.addEventListener('click', (e) => {
//         const cellsInRow = row.querySelectorAll('.cell')
//         const selectedCellIndex = Array.from(cellsInRow).indexOf(e.target)

//         if (game[rowIndex][selectedCellIndex] === true) {
//             newarray[rowIndex].splice([selectedCellIndex], 1, 'X')
//             console.log(newarray)
//         } else {
//             newarray[rowIndex].splice([selectedCellIndex], 1, 'O')
//         }
//         for (let i = 0; i < 3; i++) {
//             if (newarray[i][0] === newarray[i][1] && newarray[i][1] === newarray[i][2]) {
//                 return console.log(`O player ${newarray[i][0]} ganhou`)
//             }
//         }
//     })

// })













