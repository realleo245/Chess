// Placeholder
while(true) {
    let piece: string= undefined;
    document.getElementById("game").addEventListener("click", (e) => {
        let target = e.target as Element;
        if(target && target.nodeName == "TD") {
            const cell = target;
            if(piece === undefined) {
                piece = cell.textContent;
            }
            else {
                cell.textContent = piece;
                piece = undefined;
            }
        }
    });
}