var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color) {
        var _this = this;
        color == Color.WHITE ? _this = _super.call(this, color, 7, 3) || this : _this = _super.call(this, color, 3, 0) || this;
        return _this;
    }
    King.prototype.getAllLegalMoves = function () {
        var moves = [];
        return moves;
    };
    return King;
}(Piece));
