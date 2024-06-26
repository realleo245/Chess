import{Color} from './color';
import {Play} from './play';
import {Player} from './player';

class Game {
    private board: Square[][] = [];
    private white: Player;
    private black: Player;
    private turn: Color;
    private static instance: Game;
    public static create(white: Player, black: Player): Game {
        this.instance = new Game(white, black);
        return this.instance;
    }
    public static getInstance(): Game {
        if(Game.instance === undefined) {
            throw new Error("You need to initialize the Game instance first!");
        }
        else {
            return this.instance;
        }
    }
    private constructor(white: Player, black: Player) {
        this.white = white;
        this.black = black;
        for(let i: number = 0; i < 8; i++) {
            for(let j: number = 0; j < 8; j++) {
                this.board[i][j] = new Square(i, j);
            }
        }
    }
    public getBoard(): Square[][] {
        return this.board;
    }
    public start(): void {
        console.log("Game begun");
        this.turn = Color.WHITE;
    }
    public play(): Play {
        return this.turn == Color.WHITE ? this.white.play() : this.black.play();
    }
    public isFinished(): boolean {
        //TODO: Actually write it
        return false;
    }
}