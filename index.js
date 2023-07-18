const inputEle = document.querySelector(".input");
const bodyEl = document.querySelector("body");
//console.log(inputEle);
//inputEle.checked = true;
//inputEle.checked = false;
inputEle.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody() {
  if (inputEle.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}
inputEle.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEle.checked));
}
