class Player {
    private color: Color;
    private king: King;
    // In case of promotion
    private queens: Queen[] = [];
    private rooks: Rook[] = []
    private bishops: Bishop[] = [];
    private knights: Knight[] = [];
    private pawns: Pawn[] = [];
    public constructor(color: Color) {
        this.color = color;
        this.king = new King(color);
        this.queens.push(new Queen(color));
        this.rooks.push(new Rook(color, SquareColor.LIGHT), new Rook(color, SquareColor.DARK));
        this.bishops.push(new Bishop(color, SquareColor.LIGHT), new Bishop(color, SquareColor.DARK));
        this.knights.push(new Knight(color, SquareColor.LIGHT), new Knight(color, SquareColor.DARK));
        for(let i: number = 0; i < 8; i++) {
            this.pawns.push(new Pawn(color, i));
        }
    }
    public play(): void {
        // Represents a play
    }
}