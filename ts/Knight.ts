class Knight extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(7, 1) : super(7, 6))
            : (squareColor == SquareColor.LIGHT ? super(0, 6) : super(0, 2))
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
    
}