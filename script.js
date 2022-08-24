// Inicial Data:

let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
}

let playerTurn = '';

let warning = ''

let playing = false;





//Events:

document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item => { item.addEventListener('click', itemClick ) })






//Functions:

function itemClick(event){
    let item = event.target.getAttribute('data-item')

    if(square[item] === ''){
        square[item] = playerTurn 
    }
    
    renderSquare()

    togglePlayer()
}

//change player:
function togglePlayer() {
    if (playerTurn === 'x'){
        playerTurn = 'o'
    }
    else {
        playerTurn = 'x'
    }
}
function reset(){
    //clean warnings:
    warning = ''

    // whats turn of the player:
    let random = Math.floor(Math.random() * 2 )
    if(random == 0){
        playerTurn = 'x'
    }
    else {
        playerTurn = 'o'
    }

    //clean squares:
    for( let e in square ) {
        square[e] = ''
    }

    // reset and start game:
    playing = true

    renderSquare()
    renderInfo()
}

function renderSquare() {
    for( let e in square ){
        let item = document.querySelector(`div[data-item=${e}]`)

        if(square[e] !== ''){
            item.innerHTML = square[e]
        }
        else {
            item.innerHTML = ''
        }
    }
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = playerTurn
    document.querySelector('resultado').innerHTML = warning
}
