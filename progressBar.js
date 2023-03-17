const formArray = ["fname","lname","email","password"].map(id => document.getElementById(id));
const progressBar = document.querySelector("#progress-bar");
const progressIndicator = document.getElementById("progress");

function updateProgress() {
    const filledFields = formArray.filter(field => field.value).length;
    const progress = 25 * filledFields + "%";
    const progressIndicatorPos = 82 * filledFields + "px";
    progressBar.style.width = progress;
    progressIndicator.textContent = progress;
    progressIndicator.style.left = progressIndicatorPos;
}

formArray.forEach(element => element.addEventListener("change", updateProgress));