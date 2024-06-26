"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
// Placeholder
document.addEventListener("DOMContentLoaded", function () {
    //let piece = undefined;
    var cell = undefined;
    var game = game_1.Game.create(new Player(Color.WHITE), new Player(Color.BLACK));
    document.getElementById("start").addEventListener("click", function () {
        game.start();
        while (!game.isFinished()) {
            var play = game.play();
            var table = document.getElementById("game");
            var rowIndex = play.getPreviousLocation().getRow();
            var colIndex = play.getPreviousLocation().getCol();
            cell = table.rows[rowIndex].cells[colIndex];
            var piece = cell.textContent;
            rowIndex = play.getNextLocation().getRow();
            colIndex = play.getNextLocation().getCol();
            cell.textContent = "";
            cell = table.rows[rowIndex].cells[colIndex];
            cell.textContent = piece;
        }
        // document.getElementById("game").addEventListener("click", (e) => {
        //     console.log("click detected");
        //     let target = e.target as Node;
        //     if(target && target.nodeName == "TD") {
        //         if(piece === undefined) {
        //             cell = target;
        //             piece = cell.textContent;
        //             cell.textContent = "";
        //         }
        //         else {
        //             target.textContent = piece;
        //             piece = undefined;
        //         }
        //     }          
        // });  
    });
});
