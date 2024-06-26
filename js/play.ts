import {Piece} from './piece';

export class Play {
    private piece: Piece;
    private previousLocation: Square;
    private nextLocation: Square;
    public constructor(piece: Piece, previousLocation: Square, nextLocation: Square) {
        this.piece = piece;
        this.previousLocation = previousLocation;
        this.nextLocation = nextLocation;
    }
    public getPiece(): Piece {
        return this.piece;
    }
    public getPreviousLocation(): Square {
        return this.previousLocation;
    }
    public getNextLocation(): Square {
        return this.nextLocation;
    }
 
 }