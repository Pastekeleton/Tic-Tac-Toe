/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
};
init();

function render() {
    board.forEach(function(mark, index){
        console.log(mark, index);
    });
};

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/