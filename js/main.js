/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};
init();

function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    });
};

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/