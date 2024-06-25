class Knight extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(color, 7, 1) : super(color, 7, 6))
            : (squareColor == SquareColor.LIGHT ? super(color, 0, 6) : super(color, 0, 2))
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
    
}