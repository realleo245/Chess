class Rook extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(7, 7) : super(7, 0))  
            : (squareColor == SquareColor.LIGHT ? super(0, 0) : super(0, 7));
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}