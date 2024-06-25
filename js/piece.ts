abstract class Piece {
    protected location: Square;
    protected color: Color;
    protected hasMoved: boolean;
    protected constructor(color: Color, startRow: number, startCol: number) {
        this.color = color;
        this.location = Game.getInstance().getBoard()[startRow][startCol];
        this.hasMoved = false;
    }
    public move(location: Square): void {
        this.hasMoved = true;
        this.location = location;
    }
    public getColor(): Color {
        return this.color;
    }
    public abstract getAllLegalMoves(): Square[];
}