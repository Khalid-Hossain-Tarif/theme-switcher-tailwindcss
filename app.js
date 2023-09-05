const themeToggle = document.getElementById("theme-switch");
const body = document.body;

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
    }
});