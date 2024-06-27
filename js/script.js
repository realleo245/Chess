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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Square = /** @class */ (function () {
    /**
     * Creates a new Square object
     * @param row The row
     * @param col The column
     * @param piece The Piece occupying the Square
     * @param color The SquareColor of the square
     */
    function Square(row, col, piece) {
        this.row = row;
        this.col = col;
        this.piece = piece;
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
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 7, 5) || this : _this = _super.call(this, color, 7, 2) || this)
            : (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 0, 2) || this : _this = _super.call(this, color, 0, 5) || this);
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
        color == Color.WHITE ? _this = _super.call(this, color, 7, 3) || this : _this = _super.call(this, color, 3, 0) || this;
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
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 7, 1) || this : _this = _super.call(this, color, 7, 6) || this)
            : (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 0, 6) || this : _this = _super.call(this, color, 0, 2) || this);
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
        color == Color.WHITE ? _this = _super.call(this, color, 7, 4) || this : _this = _super.call(this, color, 0, 4) || this;
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
        color == Color.WHITE ? _this = _super.call(this, color, 6, position) || this : _this = _super.call(this, color, 1, position) || this;
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
    }
    // Method exists because... circular dependencies
    Player.prototype.loadPieces = function () {
        this.pieces.push(new King(this.color));
        this.pieces.push(new Queen(this.color));
        this.pieces.push(new Rook(this.color, SquareColor.LIGHT), new Rook(this.color, SquareColor.DARK));
        this.pieces.push(new Knight(this.color, SquareColor.LIGHT), new Knight(this.color, SquareColor.DARK));
        this.pieces.push(new Bishop(this.color, SquareColor.LIGHT), new Bishop(this.color, SquareColor.DARK));
        for (var i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(this.color, i));
        }
    };
    Player.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var piece, cell, previousLocation, nextLocation;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                piece = undefined;
                cell = undefined;
                previousLocation = undefined;
                nextLocation = undefined;
                //TODO: Replace with something that I actually understand
                (_a = document.getElementById("game")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
                    var _a;
                    console.log("click detected");
                    var target = e.target;
                    if (target && target.nodeName == "TD") {
                        cell = target;
                        var row = cell.parentElement;
                        var rowIndex = row.rowIndex;
                        var colIndex = cell.cellIndex;
                        if (((_a = Game.getInstance().getBoard()[rowIndex][colIndex].getPiece()) === null || _a === void 0 ? void 0 : _a.getColor()) == _this.color) {
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
                return [2 /*return*/, new Play(piece, previousLocation, nextLocation)];
            });
        });
    };
    return Player;
}());
var Game = /** @class */ (function () {
    function Game(white, black) {
        this.board = [];
        this.white = white;
        this.black = black;
        for (var i = 0; i < 8; i++) {
            var row = [];
            for (var j = 0; j < 8; j++) {
                row.push(new Square(i, j, undefined));
            }
            this.board.push(row);
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
        this.turn = Color.WHITE;
        this.white.loadPieces();
        this.black.loadPieces();
    };
    Game.prototype.play = function () {
        return this.turn == Color.WHITE ? this.white.play() : this.black.play();
    };
    Game.prototype.isFinished = function () {
        //TODO: Actually write it
        return false;
    };
    return Game;
}());
// Placeholder
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    //let piece = undefined;
    var cell = undefined;
    var white = new Player(Color.WHITE);
    var black = new Player(Color.BLACK);
    var game = Game.create(white, black);
    (_a = document.getElementById("start")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        game.start();
        while (!game.isFinished()) {
            var play = game.play();
            var table = document.getElementById("game");
            console.log(play);
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
}); // Placeholder
// document.addEventListener("DOMContentLoaded", function() {
//     let piece = undefined;
//     let cell = undefined;
//     document.getElementById("start").addEventListener("click", function() {
//         document.getElementById("game").addEventListener("click", (e) => {
//             console.log("click detected");
//             let target = e.target as Node;
//             if(target && target.nodeName == "TD") {
//                 if(piece === undefined) {
//                     cell = target;
//                     piece = cell.textContent;
//                     cell.textContent = "";
//                 }
//                 else {
//                     target.textContent = piece;
//                     piece = undefined;
//                 }
//             }          
//         });  
//     }); 
// });
