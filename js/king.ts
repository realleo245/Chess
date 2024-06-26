import {Color} from './color';
import {Piece} from './piece';
import{Square} from './square';

export class King extends Piece {
    public constructor(color: Color) {
        color == Color.WHITE ? super(color, 7, 3) : super(color, 3, 0);
    }
    public getAllLegalMoves(): Square[] {
        let moves: Square[] = [];
        
        return moves;
    }
}