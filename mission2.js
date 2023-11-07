function hideContent1() {
  let showHide = document.getElementById("chicago");
  let button = document.getElementById("chicagoButton");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
}
function hideContent2() {
  let showHide = document.getElementById("dallas");
  let button = document.getElementById("dallasButton");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
}
function hideContent3() {
  let showHide = document.getElementById("colorado");
  let button = document.getElementById("cosButton");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
}
function hideContent4() {
  let showHide = document.getElementById("LA");
  let button = document.getElementById("laButton");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
}
const dispE1 = document.querySelector("span");
let counter = 0;
function addCount() {
  counter++;
  dispE1.textContent = counter;
}
