const saturn = document.getElementById("SATURN");
let totalClicks = JSON.parse(localStorage.getItem("timesClickedOnSaturn"));
saturn.onmouseover = meh;
saturn.onmouseout = original;

saturn.onmousedown = original;
saturn.onmouseup = meh;

saturn.addEventListener("click", clickCounter);

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
}