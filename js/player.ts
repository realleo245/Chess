class Player {
    private color: Color;
    // Represents pieces in the order of [King, Queen, Light Rook, Dark Rook, Light Knight, Dark Knight, Light Bishop, Dark Bishop, Pawn(s) in order]
    // Promoted pieces are pushed to the end
    private pieces: Piece[] = [];
    public constructor(color: Color) {
        this.color = color;
        this.pieces.push(new King(color));
        this.pieces.push(new Queen(color));
        this.pieces.push(new Rook(color, SquareColor.LIGHT), new Rook(color, SquareColor.DARK));
        this.pieces.push(new Knight(color, SquareColor.LIGHT), new Knight(color, SquareColor.DARK));
        this.pieces.push(new Bishop(color, SquareColor.LIGHT), new Bishop(color, SquareColor.DARK));
        for(let i: number = 0; i < 8; i++) {
            this.pieces.push(new Pawn(color, i));
        }
    }
    public play(): Play {
        // Represents a play
        
    }
}