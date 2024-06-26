enum Color {
    WHITE, BLACK
}
enum SquareColor {
    LIGHT, DARK
}
class Square {
    /**
     * Represents the row
     */
    private row: number;
    /**
     * Represents the column
     */
    private col: number;
    /**
     * Represents the piece occupying the square
     */
    private piece?: Piece;
    /**
     * Represents the color of the square
     */
    private color?: SquareColor;
    /**
     * Creates a new Square object
     * @param row The row
     * @param col The column
     * @param piece The Piece occupying the Square
     * @param color The SquareColor of the square
     */
    public constructor(row: number, col: number, piece?: Piece, color?: SquareColor) {
        this.row = row;
        this.col = col;
        this.piece = piece;
        this.color = color;
    }
    /**
     * @returns The row letter
     */
    public getRow(): number {
        return this.row;
    }
    /**
     * @returns The column letter
     */
    public getCol(): number {
        return this.col;
    }
    /**
     * 
     * @returns the piece occupying the square
     */
    public getPiece(): Piece | null | undefined {
        return this.piece;
    }
    public setPiece(piece: Piece): void {
        this.piece = piece;
    }
    public isOccupied(): boolean {
        return this.piece == null || this.piece == undefined;
    }
 }
abstract class Piece {
    protected location: Square;
    protected color: Color;
    protected hasMoved: boolean;
    protected constructor(color: Color, startRow: number, startCol: number) {
        this.color = color;
        this.location = Game.getInstance().getBoard()[startRow][startCol];
        this.hasMoved = false;
    }
    public move(location: Square): void {
        this.hasMoved = true;
        this.location = location;
    }
    public getColor(): Color {
        return this.color;
    }
    public abstract getAllLegalMoves(): Square[];
}
class Bishop extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(color, 7, 5) : super(color, 7, 2))
            : (squareColor == SquareColor.LIGHT ? super(color, 0, 2) : super(color, 0, 5));
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        
        return moves;
    }
}
class King extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(color, 7, 3) : super(color, 3, 0);
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        
        return moves;
    }
}
class Knight extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(color, 7, 1) : super(color, 7, 6))
            : (squareColor == SquareColor.LIGHT ? super(color, 0, 6) : super(color, 0, 2))
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
    
}
class Queen extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(color, 7, 4) : super(color, 0, 4);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}
class Pawn extends Piece {
    public constructor(color: Color, position: number) {
        color == Color.WHITE ? super(color, 6, position) : super(color, 1, position);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}
class Rook extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(color, 7, 7) : super(color, 7, 0))  
            : (squareColor == SquareColor.LIGHT ? super(color, 0, 0) : super(color, 0, 7));
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        for(let i: number = 0; i < this.location.getRow(); i++) {
            moves.push(Game.getInstance().getBoard()[i][this.location.getCol()]);
        }
        for(let i: number = this.location.getRow() + 1; i < 8; i++) {
            moves.push(Game.getInstance().getBoard()[i][this.location.getCol()]);
        }
        for(let i: number = 0; i < this.location.getCol(); i++) {
            moves.push(Game.getInstance().getBoard()[this.location.getRow()][i]);
        }
        for(let i: number = this.location.getCol() + 1; i < this.location.getCol(); i++) {
            moves.push(Game.getInstance().getBoard()[this.location.getRow()][i]);
        }
        return moves;
    }
}
class Play {
    private piece: Piece;
    private previousLocation: Square;
    private nextLocation: Square;
    public constructor(piece: Piece, previousLocation: Square, nextLocation: Square) {
        this.piece = piece;
        this.previousLocation = previousLocation;
        this.nextLocation = nextLocation;
    }
    public getPiece(): Piece {
        return this.piece;
    }
    public getPreviousLocation(): Square {
        return this.previousLocation;
    }
    public getNextLocation(): Square {
        return this.nextLocation;
    }
 
 }
class Player {
    private color: Color;
    // Represents pieces in the order of [King, Queen, Light Rook, Dark Rook, Light Knight, Dark Knight, Light Bishop, Dark Bishop, Pawn(s) in order]
    // Promoted pieces are pushed to the end
    private pieces: Piece[] = [];
    public constructor(color: Color) {
        this.color = color;
        this.pieces.push(new King(color));
        this.pieces.push(new Queen(color));
        this.pieces.push(new Rook(color, SquareColor.LIGHT), new Rook(color, SquareColor.DARK));
        this.pieces.push(new Knight(color, SquareColor.LIGHT), new Knight(color, SquareColor.DARK));
        this.pieces.push(new Bishop(color, SquareColor.LIGHT), new Bishop(color, SquareColor.DARK));
        for(let i: number = 0; i < 8; i++) {
            this.pieces.push(new Pawn(color, i));
        }
    }
    public play(): Play {
        let piece: Piece = undefined;
        let cell: any = undefined;
        let previousLocation: Square = undefined;
        let nextLocation: Square = undefined;
        document.getElementById("game").addEventListener("click", (e) => {
            console.log("click detected");
            let target = e.target as Node;
            if(target && target.nodeName == "TD") {
                cell = target as HTMLTableCellElement;
                const row: HTMLTableRowElement = cell.parentElement as HTMLTableRowElement;
                const rowIndex = row.rowIndex;
                const colIndex = cell.cellIndex;
                if(Game.getInstance().getBoard()[rowIndex][colIndex].getPiece().getColor() == this.color) {
                    if(piece === undefined) {
                        previousLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
                        piece = previousLocation.getPiece();
                    }
                    else {
                        nextLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
                        piece = undefined
                    }
                }
            }          
        });  
        return new Play(piece, previousLocation, nextLocation);
    }
}
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
// Placeholder
document.addEventListener("DOMContentLoaded", function() {
    //let piece = undefined;
    let cell = undefined;
    let game: Game = Game.create(new Player(Color.WHITE), new Player(Color.BLACK));
    document.getElementById("start").addEventListener("click", function() {
        game.start();
        while(!game.isFinished()) {
            let play: Play = game.play();
            const table: HTMLTableElement = document.getElementById("game") as HTMLTableElement;
            let rowIndex: number = play.getPreviousLocation().getRow();
            let colIndex: number = play.getPreviousLocation().getCol();
            cell = table.rows[rowIndex].cells[colIndex];
            const piece: string = cell.textContent;
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