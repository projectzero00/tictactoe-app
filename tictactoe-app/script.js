let cell = document.querySelectorAll('.cell')
let row = document.querySelectorAll('.row')
let game = []

let loading = () => {
    switch (game.length) {
        case 0:
        case 1:
        case 2:
            let rowArray = []
            for (let j = 0; j < 9; j++) {

                if (rowArray.length < 3) {
                    rowArray.push(cell[j])
                }
                else {
                    game.push(rowArray)
                    rowArray = []
                    rowArray.push(cell[j])
                }
            }
            game.push(rowArray)
            break;
    }
}
window.onload = (loading())

let player1 = true
let player2 = false
let verify = true
let rows = 0
let cells = 0

row.forEach((element, index) => {
    element.addEventListener('click', () =>{
        rows = index
        console.log(rows)
    })
});

game.forEach(element => {
    element.forEach((element, index) => {
        element.addEventListener('click', () =>{
            cells = index
            console.log(cells)
        })
    });
});

    

//bug por aqui
cell.forEach((element, index) => {
    element.addEventListener('click', () => {
        if(player1 === true){
            element.innerHTML = `<p class="playerMove">X</p>`
            player1 = false
            player2 = true
            game[rows].splice(cells, 1, 'player1')
        } else {
            element.innerHTML = `<p class="playerMove">O</p>`
            player1 = true
            player2 = false
            game[rows].splice(cells, 1, 'player2')
        }
    })
});




