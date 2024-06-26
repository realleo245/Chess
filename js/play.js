var Play = /** @class */ (function () {
    function Play(piece, previousLocation, nextLocation) {
        this.piece = piece;
        this.previousLocation = previousLocation;
        this.nextLocation = nextLocation;
    }
    Play.prototype.getPiece = function () {
        return this.piece;
    };
    Play.prototype.getPreviousLocation = function () {
        return this.previousLocation;
    };
    Play.prototype.getNextLocation = function () {
        return this.nextLocation;
    };
    return Play;
}());
