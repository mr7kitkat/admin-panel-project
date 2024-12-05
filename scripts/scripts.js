const dashboardToggleBtn = document.querySelector("button#dashboard");
const nav = document.querySelector("nav");

dashboardToggleBtn.addEventListener("click", function (e) {
    nav.classList.toggle("hide")
})
