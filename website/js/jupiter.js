const jupiter = document.getElementById("JUPITER");
jupiter.onmouseover = beBiggerJupiter;
jupiter.onmouseout = original;

jupiter.onmousedown = original;
jupiter.onmouseup = beBiggerJupiter;

function beBiggerJupiter() {
    jupiter.style.width = "540px";
    jupiter.style.height = "540px";
}
function original() {
    jupiter.style.width = "520px";
    jupiter.style.height = "520px";
}