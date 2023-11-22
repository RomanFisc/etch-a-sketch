let color = 'pink';

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>div.remove());
    board.style.setProperty('--grid-rows', size);
    board.style.setProperty('--grid-cols', size);

    let amount = size * size;
    for (c = 0; c < (amount); c++) {
        let cell = document.createElement('div');
        board.appendChild(cell).className = "grid-item";
    };

    var hoverItem = document.getElementsByClassName('grid-item');

    for (var i = 0; i < hoverItem.length; i++ ) {
        hoverItem[i].addEventListener('mouseover', hoverEffect, false);
    }
    function hoverEffect(event) {
        event.target.style.backgroundColor = color;
    }
}

populateBoard(20);

function changeSize() {
    let input = document.querySelector('input[type="text"]');
    let size = parseInt(input.value);

    if (size > 1 && size < 100) {
        populateBoard(size);
    } else if (size >= 100) {
        alert('Please enter a number less than 100');
    } else {
        alert('Please enter a valid positive number greater than 1.');
    }
}

function hoverEffect() {
    this.style.backgroundColor = color;
};

function changeColor(choice){
    color = choice;
};

function clearBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>div.style.backgroundColor = 'purple');
}