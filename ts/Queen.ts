class Queen extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(7, 4) : super(0, 4);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}