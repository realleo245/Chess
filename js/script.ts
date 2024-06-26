import {Color} from './color';
import {Game} from "./game";
import {Play} from './play';
import {Player} from "./player";
// Placeholder
document.addEventListener("DOMContentLoaded", function() {
    //let piece = undefined;
    let cell = undefined;
    let game: Game = Game.create(new Player(Color.WHITE), new Player(Color.BLACK));
    document.getElementById("start").addEventListener("click", function() {
        game.start();
        while(!game.isFinished()) {
            let play: Play = game.play();
            const table: HTMLTableElement = document.getElementById("game") as HTMLTableElement;
            let rowIndex: number = play.getPreviousLocation().getRow();
            let colIndex: number = play.getPreviousLocation().getCol();
            cell = table.rows[rowIndex].cells[colIndex];
            const piece: string = cell.textContent;
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