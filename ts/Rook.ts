class Rook extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(color, 7, 7) : super(color, 7, 0))  
            : (squareColor == SquareColor.LIGHT ? super(color, 0, 0) : super(color, 0, 7));
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        for(let i: number = 0; i < this.location.getRow(); i++) {
            moves.push(new Square(i, this.location.getCol()));
        }
        for(let i: number = this.location.getRow() + 1; i < 8; i++) {
            moves.push(new Square(i, this.location.getCol()));
        }
        for(let i: number = 0; i < this.location.getCol(); i++) {
            moves.push(new Square(this.location.getRow(), i));
        }
        for(let i: number = this.location.getCol() + 1; i < this.location.getCol(); i++) {
            moves.push(new Square(this.location.getRow(), i));
        }
        return moves;
    }
}