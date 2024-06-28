
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
     * Creates a new Square object
     * @param row The row
     * @param col The column
     * @param piece The Piece occupying the Square
     * @param color The SquareColor of the square
     */
    public constructor(row: number, col: number, piece: Piece) {
        this.row = row;
        this.col = col;
        this.piece = piece;
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
    }
    // Method exists because... circular dependencies
    public loadPieces(): void {
        this.pieces.push(new King(this.color));
        this.pieces.push(new Queen(this.color));
        this.pieces.push(new Rook(this.color, SquareColor.LIGHT), new Rook(this.color, SquareColor.DARK));
        this.pieces.push(new Knight(this.color, SquareColor.LIGHT), new Knight(this.color, SquareColor.DARK));
        this.pieces.push(new Bishop(this.color, SquareColor.LIGHT), new Bishop(this.color, SquareColor.DARK));
        for(let i: number = 0; i < 8; i++) {
            this.pieces.push(new Pawn(this.color, i));
        }
    }
    public play(): Play {
        let piece: unknown = undefined;
        let cell: any = undefined;
        let previousLocation: unknown = undefined;
        let nextLocation: unknown = undefined;
        // //TODO: Replace with something that I actually understand
        // document.getElementById("game")?.addEventListener("click", (e) => {
        //     console.log("click detected");
        //     let target = e.target as Node;
        //     if(target && target.nodeName == "TD") {
        //         cell = target as HTMLTableCellElement;
        //         const row: HTMLTableRowElement = cell.parentElement as HTMLTableRowElement;
        //         const rowIndex = row.rowIndex;
        //         const colIndex = cell.cellIndex;
        //         if(Game.getInstance().getBoard()[rowIndex][colIndex].getPiece()?.getColor() == this.color) {
        //             if(piece === undefined) {
        //                 previousLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
        //                 piece = (previousLocation as Square).getPiece();
        //             }
        //             else {
        //                 nextLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
        //                 //TODO: Set the actual piece
        //             }
        //         }
        //     }       
        // });  
       
        const play: Play = await this.waitForPlay();
        return play;
    }
    // Assume you have a function to handle cell clicks
    public handleCellClick(cell: HTMLElement): Promise<Play> {
        return new Promise<Play>((resolve) => {
            cell.addEventListener('click', () => {
            // Resolve the Promise with the Play object
            const play = new Play(piece as Piece, previousLocation as Square, nextLocation as Square);
            resolve(play);
        });
    });
}

// Initialize shared context

public async waitForPlay(): Promise<Play> {
    let piece: Piece | undefined;
    let previousLocation: Square | undefined;
    let nextLocation: Square | undefined;

    const allCells = document.querySelectorAll('td'); // Get all table cells

    // Attach click event listeners to all cells
    allCells.forEach(async (cell) => {
        const clickedCell = await this.handleCellClick(cell);
        if (piece === undefined) {
            previousLocation = cell.rowSpan;
            piece = previousLocation.getPiece();
        } else {
            nextLocation = /* Set next location based on clicked cell */;
            // TODO: Move the piece on the board
            console.log('Both cells clicked! Proceed with your logic.');

            // Store the Play object in the shared context
            sharedContext.play = clickedCell;
        }
    });
}

// Call the function to start waiting for user input
waitForUserInput();

// Access the resolved Play object outside the function
if (sharedContext.play) {
    console.log('Play object outside the function:', sharedContext.play);
} else {
    console.log('Waiting for user input...');
}
    //  async waitForPlay(): Promise<Play> {
    //     let piece: Piece | undefined = undefined;
    //     let cell: HTMLTableCellElement | undefined = undefined;
    //     let previousLocation: Square | undefined = undefined;
    //     let nextLocation: Square | undefined = undefined;
    
    //     return new Promise<Play>((resolve) => {
    //         const clickHandler = (e: MouseEvent) => {
    //             console.log("Click detected");
    //             const target = e.target as Node;
    
    //             if (target && target.nodeName === "TD") {
    //                 cell = target as HTMLTableCellElement;
    //                 const row = cell.parentElement as HTMLTableRowElement;
    //                 const rowIndex = row.rowIndex;
    //                 const colIndex = cell.cellIndex;
    
    //                 if (Game.getInstance().getBoard()[rowIndex][colIndex].getPiece()?.getColor() === this.color) {
    //                  private   if (piece === undefined) {
    //                         previousLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
    //                         piece = previousLocation.getPiece();
    //                     } else {
    //                         nextLocation = Game.getInstance().getBoard()[rowIndex][colIndex];
    //                         // TODO: Set the actual piece
    //                     }
    //                 }
    //             }
    
    //             resolve(new Play(piece as Piece, previousLocation as Square, nextLocation as Square));
    //             document.getElementById("game")?.removeEventListener("click", clickHandler);
    //         };
    
    //         document.getElementById("game")?.addEventListener("click", clickHandler);
    //     });
    // }
    
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
            let row: Square[] = [];
            for(let j: number = 0; j < 8; j++) {
                row.push(new Square(i, j, undefined));
            }
            this.board.push(row);
        }
    }
    public getBoard(): Square[][] {
        return this.board;
    }
    public start(): void {
        console.log("Game begun");
        this.turn = Color.WHITE;
        this.white.loadPieces();
        this.black.loadPieces();
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
    let cell: any = undefined;
    let white: Player = new Player(Color.WHITE);
    let black: Player = new Player(Color.BLACK);
    let game: Game = Game.create(white, black);
    document.getElementById("start")?.addEventListener("click", function() {
        game.start();
        while(!game.isFinished()) {
            let play: Play = game.play();
            const table: HTMLTableElement = document.getElementById("game") as HTMLTableElement;
            console.log(play);
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
});// Placeholder
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
