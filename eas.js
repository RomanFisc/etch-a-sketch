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


