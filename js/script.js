"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
var squarecolor_1 = require("./squarecolor");
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
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, squareColor) {
        var _this = this;
        color == color_1.Color.WHITE ? (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 7, 5) || this : _this = _super.call(this, color, 7, 2) || this)
            : (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 0, 2) || this : _this = _super.call(this, color, 0, 5) || this);
        return _this;
    }
    Bishop.prototype.getAllLegalMoves = function () {
        var moves = [];
        return moves;
    };
    return Bishop;
}(Piece));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color) {
        var _this = this;
        color == color_1.Color.WHITE ? _this = _super.call(this, color, 7, 3) || this : _this = _super.call(this, color, 3, 0) || this;
        return _this;
    }
    King.prototype.getAllLegalMoves = function () {
        var moves = [];
        return moves;
    };
    return King;
}(Piece));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, squareColor) {
        var _this = this;
        color == color_1.Color.WHITE ? (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 7, 1) || this : _this = _super.call(this, color, 7, 6) || this)
            : (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 0, 6) || this : _this = _super.call(this, color, 0, 2) || this);
        return _this;
    }
    Knight.prototype.getAllLegalMoves = function () {
        throw new Error("Method not implemented.");
    };
    return Knight;
}(Piece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color) {
        var _this = this;
        color == color_1.Color.WHITE ? _this = _super.call(this, color, 7, 4) || this : _this = _super.call(this, color, 0, 4) || this;
        return _this;
    }
    Queen.prototype.getAllLegalMoves = function () {
        throw new Error("Method not implemented.");
    };
    return Queen;
}(Piece));
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, position) {
        var _this = this;
        color == color_1.Color.WHITE ? _this = _super.call(this, color, 6, position) || this : _this = _super.call(this, color, 1, position) || this;
        return _this;
    }
    Pawn.prototype.getAllLegalMoves = function () {
        throw new Error("Method not implemented.");
    };
    return Pawn;
}(Piece));
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(color, squareColor) {
        var _this = this;
        color == color_1.Color.WHITE ? (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 7, 7) || this : _this = _super.call(this, color, 7, 0) || this)
            : (squareColor == squarecolor_1.SquareColor.LIGHT ? _this = _super.call(this, color, 0, 0) || this : _this = _super.call(this, color, 0, 7) || this);
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
var Play = /** @class */ (function () {
    function Play(piece, previousLocation, nextLocation) {
        this.piece = piece;
        this.previousLocation = previousLocation;
        this.nextLocation = nextLocation;
    }
    Play.prototype.getPiece = function () {
        return this.piece;
    };
    Play.prototype.getPreviousLocation = function () {
        return this.previousLocation;
    };
    Play.prototype.getNextLocation = function () {
        return this.nextLocation;
    };
    return Play;
}());
var Player = /** @class */ (function () {
    function Player(color) {
        // Represents pieces in the order of [King, Queen, Light Rook, Dark Rook, Light Knight, Dark Knight, Light Bishop, Dark Bishop, Pawn(s) in order]
        // Promoted pieces are pushed to the end
        this.pieces = [];
        this.color = color;
        this.pieces.push(new King(color));
        this.pieces.push(new Queen(color));
        this.pieces.push(new Rook(color, squarecolor_1.SquareColor.LIGHT), new Rook(color, squarecolor_1.SquareColor.DARK));
        this.pieces.push(new Knight(color, squarecolor_1.SquareColor.LIGHT), new Knight(color, squarecolor_1.SquareColor.DARK));
        this.pieces.push(new Bishop(color, squarecolor_1.SquareColor.LIGHT), new Bishop(color, squarecolor_1.SquareColor.DARK));
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
                        //TODO: Set the actual piece
                    }
                }
            }
        });
        return new Play(piece, previousLocation, nextLocation);
    };
    return Player;
}());
var Game = /** @class */ (function () {
    function Game(white, black) {
        this.board = [];
        this.white = white;
        this.black = black;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.board[i][j] = new Square(i, j);
            }
        }
    }
    Game.create = function (white, black) {
        this.instance = new Game(white, black);
        return this.instance;
    };
    Game.getInstance = function () {
        if (Game.instance === undefined) {
            throw new Error("You need to initialize the Game instance first!");
        }
        else {
            return this.instance;
        }
    };
    Game.prototype.getBoard = function () {
        return this.board;
    };
    Game.prototype.start = function () {
        console.log("Game begun");
        this.turn = color_1.Color.WHITE;
    };
    Game.prototype.play = function () {
        return this.turn == color_1.Color.WHITE ? this.white.play() : this.black.play();
    };
    Game.prototype.isFinished = function () {
        //TODO: Actually write it
        return false;
    };
    return Game;
}());
// Placeholder
document.addEventListener("DOMContentLoaded", function () {
    //let piece = undefined;
    var cell = undefined;
    var game = Game.create(new Player(color_1.Color.WHITE), new Player(color_1.Color.BLACK));
    document.getElementById("start").addEventListener("click", function () {
        game.start();
        while (!game.isFinished()) {
            var play = game.play();
            var table = document.getElementById("game");
            var rowIndex = play.getPreviousLocation().getRow();
            var colIndex = play.getPreviousLocation().getCol();
            cell = table.rows[rowIndex].cells[colIndex];
            var piece = cell.textContent;
            rowIndex = play.getNextLocation().getRow();
            colIndex = play.getNextLocation().getCol();
            cell.textContent = "";
            cell = table.rows[rowIndex].cells[colIndex];
            cell.textContent = piece;
        }
        // document.getElementById("game").addEventListener("click", (e) => {
        //     console.log("click detected");
        //     let target = e.target as Node;
        //     if(target && target.nodeName == "TD") {
        //         if(piece === undefined) {
        //             cell = target;
        //             piece = cell.textContent;
        //             cell.textContent = "";
        //         }
        //         else {
        //             target.textContent = piece;
        //             piece = undefined;
        //         }
        //     }          
        // });  
    });
});
