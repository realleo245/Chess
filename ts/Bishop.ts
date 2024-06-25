class Bishop extends Piece {
    public constructor(color: Color, squareColor: SquareColor) {
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? super(7, 5) : super(7, 2))
            : (squareColor == SquareColor.LIGHT ? super(0, 2) : super(0, 5));
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}