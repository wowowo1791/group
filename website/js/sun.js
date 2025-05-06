// JavaScript Document

const alias = ["Sun", "Sol", "Sól", "Helios", "ἥλιος", "Shamash", "Surya"];
const language = [
  "English",
  "Ancient Roman",
  "Latin",
  "Ancient Greek",
  "Greek Letters",
  "Sumerian",
  "Sanskrit",
];

let count = 0;

function changeName() {
  count++;
  if (count > 6) {
    count = 0;
  }
  document.getElementById("name1").innerHTML = alias[count];
  document.getElementById("language").innerHTML = language[count];
  document.getElementById("name2").innerHTML = alias[count];
}

document.getElementById("name1").addEventListener("onclick", changeName);

let slider = document.getElementById("myRange");
// let button = document.getElementById("button");
let output = document.getElementById("percentage");
slider.value = 0;
document.body.style.background = "#000000";
document.body.style.background = "url('pictures/stars_background.png')";
document.body.style.color = "#FFFFFF";
document.querySelector("#darkMode").classList.add("dark");
output.innerHTML = slider.value * 20;

slider.oninput = function () {
  output.innerHTML = this.value * 20;
  slider.style.background = "";
  // button.style.background = "";
  document.querySelector("#darkMode").classList.remove("dark");
  if (slider.value == 5) {
    document.body.style.background = "#FFFFFF";
    document.body.style.color = "#000000";
    // button.style.background = "#FFFFFF";
  } else if (slider.value == 4) {
    document.body.style.background = "#EEEEEE";
    document.body.style.color = "#000000";
    // button.style.background = "#EEEEEE";
  } else if (slider.value == 3) {
    document.body.style.background = "#D3D3D3";
    document.body.style.color = "#000000";
    // button.style.background = "#D3D3D3";
  } else if (slider.value == 2) {
    document.body.style.background = "#A9A9A9";
    document.body.style.color = "#000000";
    // button.style.background = "#A9A9A9";
    slider.style.background = "#D3D3D3";
  } else if (slider.value == 1) {
    document.body.style.background = "#808080";
    document.body.style.color = "#000000";
    // document.body.style.background = "radial-gradient(circle, rgba(0, 255, 0, 0.1))";
    // button.style.background = "#808080";
  } else {
    document.body.style.background = "#000000";
    document.body.style.background = "url('pictures/stars_background.png')";
    document.body.style.color = "#FFFFFF";
    // button.style.background = "#000000";
    document.querySelector("#darkMode").classList.add("dark");
  }
};
