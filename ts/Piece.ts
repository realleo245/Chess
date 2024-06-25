abstract class Piece {
    protected location: Square;
    protected constructor(startRow: number, startCol: number) {
        this.location = Game.getInstance().getBoard()[startRow][startCol];
    }
    public move(location: Square): void {
        this.location = location;
    }
    public abstract getAllLegalMoves(): Square[];
}