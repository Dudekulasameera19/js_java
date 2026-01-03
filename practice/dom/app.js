function hideAllImages() {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
}

function image1() {
    hideAllImages();
    document.getElementById("img1").style.display = "block";
    alert("image1 selected");
}

function image2() {
    hideAllImages();
    document.getElementById("img2").style.display = "block";
    alert("image2 selected");
}

function image3() {
    hideAllImages();
    document.getElementById("img3").style.display = "block";
    alert("image3 selected");
}
