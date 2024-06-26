import{Piece} from './piece';
/**
 * Represents a square on the chess board
 */
export class Square {
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