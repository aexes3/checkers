class Board {
    constructor(selector){
        this.ROWS = 8;
        this.COLS = 8;

        const $board = $(selector);
        $board.html('Whoa, cool!')
    }
}