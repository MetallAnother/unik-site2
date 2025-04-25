const div = document.getElementById("up");
const div2 = document.getElementById("but1");
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        
        div.style.opacity = "100";
    }
    else{
        div.style.opacity = "0";
    }

});

div.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    behavior: "smooth" // плавно
    });
});

div2.addEventListener("click", () => {
    window.scrollTo({
        top: 1800,
        behavior: "smooth" // плавно
        });
    });