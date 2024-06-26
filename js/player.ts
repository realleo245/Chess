import{Color} from './color';
import{Game} from './game';
import{Piece} from './piece';



export class Player {
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