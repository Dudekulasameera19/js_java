let images = document.querySelectorAll(".card img");
let popup = document.getElementById("popup");
let bigImage = document.getElementById("bigImage");
let closeBtn = document.getElementById("close");
let text = document.getElementById("text");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentIndex = 0;

function showImage(index) {
    let img = images[index];
    bigImage.src = img.src;
    text.innerText = img.nextElementSibling.innerText;
}

images.forEach((img, index) => {
    img.addEventListener("click", function () {
        popup.style.display = "block";
        currentIndex = index;
        showImage(currentIndex);
    });
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") popup.style.display = "none";
});