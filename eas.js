let board = document.querySelector('.board');

function makeRows (rows, cols) {
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        board.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

var hoverItem = document.getElementsByClassName('grid-item');

for (var i = 0; i < hoverItem.length; i++ ) {
    hoverItem[i].addEventListener('mouseover', hoverEffect, false);
}
function hoverEffect(event) {
    event.target.style.backgroundColor = 'pink';
}


