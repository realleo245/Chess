class King extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(color, 7, 3) : super(color, 3, 0);
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        if(this.location.getRow() - 1 >= 0) {
            moves.push(new Square(this.location.getRow() - 1, this.location.getCol()));
        }
        return moves;
    }
}