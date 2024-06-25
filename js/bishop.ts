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