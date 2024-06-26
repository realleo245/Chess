// Placeholder
document.addEventListener("DOMContentLoaded", function() {
    let piece = undefined;
    let cell = undefined;
    document.getElementById("start").addEventListener("click", function() {
        let game: Game = Game.create(new Player(Color.WHITE), new Player(Color.BLACK));
        game.start();
        document.getElementById("game").addEventListener("click", (e) => {
            console.log("click detected");
            let target = e.target as Node;
            if(target && target.nodeName == "TD") {
                if(piece === undefined) {
                    cell = target;
                    piece = cell.textContent;
                    cell.textContent = "";
                }
                else {
                    target.textContent = piece;
                    piece = undefined;
                }
            }          
        });  
    }); 
});