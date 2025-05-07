const jupiter = document.getElementById("JUPITER");
let totalClicks = JSON.parse(localStorage.getItem("timesClickedOnJupiter"));
jupiter.onmouseover = beBiggerJupiter;
jupiter.onmouseout = original;

jupiter.onmousedown = original;
jupiter.onmouseup = beBiggerJupiter;

jupiter.addEventListener("click", clickCounter);

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
}