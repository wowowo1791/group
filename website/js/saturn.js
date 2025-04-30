const saturn = document.getElementById("SATURN");
saturn.onmouseover = meh;
saturn.onmouseout = original;

saturn.onmousedown = original;
saturn.onmouseup = meh;

function meh() {
    saturn.style.width = "1220px";
    saturn.style.height = "695px";
}
function original() {
    saturn.style.width = "1200px";
    saturn.style.height = "675px";
}