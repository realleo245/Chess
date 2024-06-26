// Placeholder
//window.onload = function() { 
document.addEventListener("DOMContentLoaded", function() {
    let piece = undefined;
    let cell = undefined;
    document.getElementById("game").addEventListener("click", (e) => {
        console.log("click detected");
        let target = e.target;
        if(target && target.nodeName == "TD") {
            if(piece === undefined) {
                cell = target;
                piece = cell.textContent;
            }
            else {
                cell.textContent = "";
                target.textContent = piece;
                piece = undefined;
            }
        }
        
    });  
});
