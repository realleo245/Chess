var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(color, squareColor) {
        var _this = this;
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 7, 7) || this : _this = _super.call(this, color, 7, 0) || this)
            : (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 0, 0) || this : _this = _super.call(this, color, 0, 7) || this);
        return _this;
    }
    Rook.prototype.getAllLegalMoves = function () {
        var moves = [];
        for (var i = 0; i < this.location.getRow(); i++) {
            moves.push(Game.getInstance().getBoard()[i][this.location.getCol()]);
        }
        for (var i = this.location.getRow() + 1; i < 8; i++) {
            moves.push(Game.getInstance().getBoard()[i][this.location.getCol()]);
        }
        for (var i = 0; i < this.location.getCol(); i++) {
            moves.push(Game.getInstance().getBoard()[this.location.getRow()][i]);
        }
        for (var i = this.location.getCol() + 1; i < this.location.getCol(); i++) {
            moves.push(Game.getInstance().getBoard()[this.location.getRow()][i]);
        }
        return moves;
    };
    return Rook;
}(Piece));
