class Pawn extends Piece {
    public constructor(color: Color, position: number) {
        color == Color.WHITE ? super(color, 6, position) : super(color, 1, position);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}