var Player = /** @class */ (function () {
    function Player(color) {
        // Represents pieces in the order of [King, Queen, Light Rook, Dark Rook, Light Knight, Dark Knight, Light Bishop, Dark Bishop, Pawn(s) in order]
        // Promoted pieces are pushed to the end
        this.pieces = [];
        this.color = color;
        this.pieces.push(new King(color));
        this.pieces.push(new Queen(color));
        this.pieces.push(new Rook(color, SquareColor.LIGHT), new Rook(color, SquareColor.DARK));
        this.pieces.push(new Knight(color, SquareColor.LIGHT), new Knight(color, SquareColor.DARK));
        this.pieces.push(new Bishop(color, SquareColor.LIGHT), new Bishop(color, SquareColor.DARK));
        for (var i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(color, i));
        }
    }
    Player.prototype.play = function () {
        var _this = this;
        var piece = undefined;
        var cell = undefined;
        var previousLocation = undefined;
        var nextLocation = undefined;
        document.getElementById("game").addEventListener("click", function (e) {
            console.log("click detected");
            var target = e.target;
            if (target && target.nodeName == "TD") {
                cell = target;
                var row = cell.parentElement;
                var rowIndex = row.rowIndex;
                var colIndex = cell.cellIndex;
                if (Game.getInstance().getBoard()[rowIndex][colIndex].getPiece().getColor() == _this.color) {
                    if (piece === undefined) {
                        previousLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
                        piece = previousLocation.getPiece();
                    }
                    else {
                        nextLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
                        piece = undefined;
                    }
                }
            }
        });
        return new Play(piece, previousLocation, nextLocation);
    };
    return Player;
}());
