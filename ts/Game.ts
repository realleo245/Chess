class Game {
    private board: Square[][] = [];
    private white: Player;
    private black: Player;
    private static instance: Game;
    public static create(white: Player, black: Player) {
        this.instance = new Game(white, black);
    }
    public static getInstance(): Game {
        if(Game.instance == null) {
            throw new Error("You need to initialize the Game instance first!");
        }
        return this.instance;
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
    }
}