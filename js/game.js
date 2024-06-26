"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
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
        this.turn = Color.WHITE;
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
exports.Game = Game;
