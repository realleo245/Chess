/**
 * Represents a square on the chess board
 */
var Square = /** @class */ (function () {
    /**
     * Creates a new Square object
     * @param row The row
     * @param col The column
     * @param piece The Piece occupying the Square
     * @param color The SquareColor of the square
     */
    function Square(row, col, piece, color) {
        this.row = row;
        this.col = col;
        this.piece = piece;
        this.color = color;
    }
    /**
     * @returns The row letter
     */
    Square.prototype.getRow = function () {
        return this.row;
    };
    /**
     * @returns The column letter
     */
    Square.prototype.getCol = function () {
        return this.col;
    };
    /**
     *
     * @returns the piece occupying the square
     */
    Square.prototype.getPiece = function () {
        return this.piece;
    };
    Square.prototype.setPiece = function (piece) {
        this.piece = piece;
    };
    Square.prototype.isOccupied = function () {
        return this.piece == null || this.piece == undefined;
    };
    return Square;
}());
