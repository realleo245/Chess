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
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, squareColor) {
        var _this = this;
        color == Color.WHITE ? (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 7, 1) || this : _this = _super.call(this, color, 7, 6) || this)
            : (squareColor == SquareColor.LIGHT ? _this = _super.call(this, color, 0, 6) || this : _this = _super.call(this, color, 0, 2) || this);
        return _this;
    }
    Knight.prototype.getAllLegalMoves = function () {
        throw new Error("Method not implemented.");
    };
    return Knight;
}(Piece));
