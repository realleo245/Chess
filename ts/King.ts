class King extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(7, 3) : super(3, 0);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}