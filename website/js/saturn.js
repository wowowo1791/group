const saturn = document.getElementById("SATURN");
let totalClicks = 0;
// let expSwitch = 0;
saturn.onmouseover = meh;
saturn.onmouseout = original;

saturn.onmousedown = original;
saturn.onmouseup = meh;

saturn.addEventListener("click", clickCounter);
// XXXX.addEventListener("click", deleteSaturn);

function meh() {
    saturn.style.width = "1220px";
    saturn.style.height = "695px";
    document.getElementById("saturn-block").style.margin = "0px 0px 130px 0px";
}
function original() {
    saturn.style.width = "1200px";
    saturn.style.height = "675px";
    document.getElementById("saturn-block").style.margin = "0px 0px 150px 0px";
}
function clickCounter() {
    totalClicks += 1;
    localStorage.setItem("timesClickedOnSaturn", JSON.stringify(totalClicks));
    /*
    if (totalClicks => 50) {
        if (expSwitch = 0) {
            // change image to explosion
            // play explosion sound
        }
        expSwitch = 1;
    }
    */
}
/*
function deleteSaturn() {
    saturn.style.display = "none";
    // play a pop sound here
    // wait three seconds here
    localStorage.removeItem("timesClickedOnSaturn");
    expSwitch = 0;
    saturn.style.display = "block";
}
*/