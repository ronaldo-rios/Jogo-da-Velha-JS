// INICIAL DATA:

let square = {
    a1:'',a2:'',a3:'',
    b1:'',b2:'',b3:'',
    c1:'',c2:'',c3:''
}

let playerTurn = '';

let warning = ''

let playing = false;


reset();


//EVENTS:

document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item => { item.addEventListener('click', itemClick ) });






//FUNCTIONS:

function itemClick(event){
    let item = event.target.getAttribute('data-item')

    if(playing && square[item] === ''){
        square[item] = playerTurn 
        renderSquare() 
        togglePlayer()
    };
    
    
}

//change player:
function togglePlayer() {
    if (playerTurn === 'x'){
        playerTurn = 'o'
    }
    else {
        playerTurn = 'x'
    }
    renderInfo()
}


function reset(){
    //clean warnings:
    warning = ''

    // whats turn of the player:
    let random = Math.floor(Math.random() * 2 )
    if(random === 0){
        playerTurn = 'x'
    }
    else {
        playerTurn = 'o'
    }

    //clean squares:
    for( let e in square ) {
        square[e] = ''
    }

    renderSquare();
    renderInfo();

     // reset and start game:
     playing = true;
}

function renderSquare() {
    for( let e in square ){
        let item = document.querySelector(`div[data-item=${e}]`);
        item.innerHTML = square[e]
        
       
    };

    checkGame();
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = playerTurn
    document.querySelector('.resultado').innerHTML = warning
}

// Verify the options case exists winner:
function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'O "x" venceu!';
        playing = false;
    }
    else if(checkWinnerFor('o')){
        warning = 'O "o" venceu!';
        playing = false;
    }
    else if(isFull()){
        warning = 'Deu empate';
        playing = false;
    }

};

function checkWinnerFor(player){
    let possibilities = [
    'a1,a2,a3', 
    'b1,b2,b3', 
    'c1,c2,c3',

    'a1,b1,c1',
    'a2,b2,b3',
    'a3,b3,c3',

    'a1,b2,c3',
    'a3,b2,c1',
    ];

    for(let k in possibilities){
        let pArray = possibilities[k].split(',')
        let hasWon = pArray.every(option => square[option] === player);

        if(hasWon){
            return true;
        }
    }

    return false;

};

function isFull(){
    for( let i in square){
        if(square[i] === ''){
            return false;
        }
    }
    return true;

}
