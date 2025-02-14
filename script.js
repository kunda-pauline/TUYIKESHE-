// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});





// Back-to-top button
const backToTop = document.createElement("button");
backToTop.innerText = "⬆";
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.background = "#333";
backToTop.style.color = "#fff";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";
backToTop.style.borderRadius = "5px";

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
