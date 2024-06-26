var Piece = /** @class */ (function () {
    function Piece(color, startRow, startCol) {
        this.color = color;
        this.location = Game.getInstance().getBoard()[startRow][startCol];
        this.hasMoved = false;
    }
    Piece.prototype.move = function (location) {
        this.hasMoved = true;
        this.location = location;
    };
    Piece.prototype.getColor = function () {
        return this.color;
    };
    return Piece;
}());
