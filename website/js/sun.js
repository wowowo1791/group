// JavaScript Document
// let currentName = 1;

// function changeName() {
//   if ((currentName = 1)) {
//     //1 means name in English
//     document.getElementById("name").innerHTML = "The Sun";
//     document.getElementById("language").innerHTML = "English";
//     currentName = 2; //2 means name in Roman
//   } else;
//   {
//     document.getElementById("name").innerHTML = "Sol";
//     document.getElementById("language").innerHTML = "ancient Roman";
//     currentName = 1; //1 means name in English
//   }
// }

// document.getElementById("name").addEventListener("onclick", changeName);

const alias = ["The Sun", "Sol", "Sól"];
let currentName = alias[0];
let aliasLength = alias.length;

let text = "<ul>";
for (let i = 0; i < aliasLength; i++) {
  text += "<li>" + alias[i] + "<li>";
}
text += "<ul>";

function changeName() {
  if ((i = 0)) {
    //means name starts in English
    document.getElementById("name").innerHTML = currentName[i];
    document.getElementById("language").innerHTML = "English";
    i++; //means the name changes to Roman
  } else;
  {
    document.getElementById("name").innerHTML = currentName[i];
    document.getElementById("language").innerHTML = "ancient Roman";
    i = 0; //means the name changes to English
  }
}

document.getElementById("name").addEventListener("onclick", changeName);

if ((slider.value = 5)) {
  document.body.style.background = "#FFFFFF";
} else if ((slider.value = 4)) {
  document.body.style.background = "#D3D3D3";
} else if ((slider.value = 3)) {
  document.body.style.background = "#A9A9A9";
} else if ((slider.value = 2)) {
  document.body.style.background = "#808080";
} else {
  document.body.style.background = "#000000";
  document.body.style.color = "#FFFFFF";
}

let slider = document.getElementById("myRange");
let output = document.getElementById("percentage");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
