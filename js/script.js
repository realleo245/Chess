// Placeholder
document.addEventListener("DOMContentLoaded", function () {
    var piece = undefined;
    var cell = undefined;
    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("game").addEventListener("click", function (e) {
            console.log("click detected");
            var target = e.target;
            if (target && target.nodeName == "TD") {
                if (piece === undefined) {
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
});
