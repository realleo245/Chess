import{Color} from './color';
import{Piece} from './piece';

export class Queen extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(color, 7, 4) : super(color, 0, 4);
    }
    public getAllLegalMoves(): Square[] {
        throw new Error("Method not implemented.");
    }
}