const button = document.getElementById("toggle");//bug
const body = document.querySelector("body");//bug

button.addEventListener("click", toggleTheme);

function toggleTheme() {//bug
body.classList.toggle("dark");
}