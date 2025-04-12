// JavaScript Document
let currentName = 1;

function changeName() {
  if ((currentName = 1)) {
    document.getElementById("name").innerHTML = "Sol";
    document.getElementById("language").innerHTML = "ancient Roman";
    currentName = 2;
  } else {
    document.getElementById("name").innerHTML = "The Sun";
    document.getElementById("language").innerHTML = "English";
    currentName = 1;
  }
}

changeName();

if (A > 10) {
  document.body.style.background =
    "#f3f3f3 url('img_tree.png') no-repeat right top";
} else if (A == 2) {
} else {
}
