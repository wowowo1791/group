const jupiter = document.getElementById("JUPITER");
let totalClicks = 0;
// let expSwitch = 0;
jupiter.onmouseover = beBiggerJupiter;
jupiter.onmouseout = original;

jupiter.onmousedown = original;
jupiter.onmouseup = beBiggerJupiter;

jupiter.addEventListener("click", clickCounter);
// XXXX.addEventListener("click", deleteJupiter);

function beBiggerJupiter() {
    jupiter.style.width = "540px";
    jupiter.style.height = "540px";
    document.getElementById("jupiter-block").style.margin = "0px 0px 130px 0px";
}
function original() {
    jupiter.style.width = "520px";
    jupiter.style.height = "520px";
    document.getElementById("jupiter-block").style.margin = "0px 0px 150px 0px";
}
function clickCounter() {
    totalClicks += 1;
    localStorage.setItem("timesClickedOnJupiter", JSON.stringify(totalClicks));
    /*
    if (totalClicks => 60) {
        if (expSwitch = 0) {
            // change image to explosion
            // play explosion sound
        }
        expSwitch = 1;
    }
    */
}
/*
function deleteJupiter() {
    jupiter.style.display = "none";
    // play a pop sound here
    // wait three seconds here
    localStorage.removeItem("timesClickedOnJupiter");
    expSwitch = 0;
    jupiter.style.display = "block";
}
*/