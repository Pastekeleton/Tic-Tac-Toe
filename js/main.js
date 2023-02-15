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
        console.log(mark, index);
    });
};

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/