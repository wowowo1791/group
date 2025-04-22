// JavaScript Document

const alias = ["Sun", "Sol", "Sól"];
const language = ["English", "Ancient Roman", "Old Norse"];

let count = 0;

function changeName() {
  count++;
  if (count > 2) {
    count = 0;
  }
  document.getElementById("name").innerHTML = alias[count];
  document.getElementById("language").innerHTML = language[count];
}

document.getElementById("name").addEventListener("onclick", changeName);

let slider = document.getElementById("myRange");
let output = document.getElementById("percentage");
slider.value = 5;
document.body.style.background = "#FFFFFF";
document.body.style.color = "#000000";
output.innerHTML = slider.value * 20;

slider.oninput = function () {
  output.innerHTML = this.value * 20;
  slider.style.background = "";
  document.querySelector("#darkMode").classList.remove("dark");
  if (slider.value == 5) {
    document.body.style.background = "#FFFFFF";
    document.body.style.color = "#000000";
  } else if (slider.value == 4) {
    document.body.style.background = "#EEEEEE";
    document.body.style.color = "#000000";
  } else if (slider.value == 3) {
    document.body.style.background = "#D3D3D3";
    document.body.style.color = "#000000";
  } else if (slider.value == 2) {
    document.body.style.background = "#A9A9A9";
    document.body.style.color = "#000000";
    slider.style.background = "#D3D3D3";
  } else if (slider.value == 1) {
    document.body.style.background = "#808080";
    document.body.style.color = "#000000";
  } else {
    document.body.style.background = "#000000";
    document.body.style.color = "#FFFFFF";
    document.querySelector("#darkMode").classList.add("dark");
  }
};
