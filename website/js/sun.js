// JavaScript Document
let currentName = 1;

function changeName() {
  if ((currentName = 1)) {
    //1 means name in English
    document.getElementById("name").innerHTML = "The Sun";
    document.getElementById("language").innerHTML = "English";
    currentName = 2; //2 means name in Roman
  } else currentName = 2;
  {
    document.getElementById("name").innerHTML = "Sol";
    document.getElementById("language").innerHTML = "ancient Roman";
    currentName = 1; //1 means name in English
  }
}

document.getElementById("name").addEventListener("onclick", changeName);

if (A > 10) {
  document.body.style.background =
    "#f3f3f3 url('img_tree.png') no-repeat right top";
} else if (A == 2) {
} else {
}
