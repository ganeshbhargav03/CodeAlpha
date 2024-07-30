var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var currentImgIndex = 0;

var images = [
    "D:\\VS code web development files\\gallery\\images\\p1.jpg",
    "D:\\VS code web development files\\gallery\\images\\p2.jpg",
    "D:\\VS code web development files\\gallery\\images\\p3.jpg",
    "D:\\VS code web development files\\gallery\\images\\p4.jpg",
    "D:\\VS code web development files\\gallery\\images\\p5.jpg",
    "D:\\VS code web development files\\gallery\\images\\p6.jpg",
    "D:\\VS code web development files\\gallery\\images\\p7.jpg",
    "D:\\VS code web development files\\gallery\\images\\p8.jpg",
    "D:\\VS code web development files\\gallery\\images\\p9.jpg",
    "D:\\VS code web development files\\gallery\\images\\p10.jpg",
    "D:\\VS code web development files\\gallery\\images\\p11.jpg",
    "D:\\VS code web development files\\gallery\\images\\p12.jpg",
    "D:\\VS code web development files\\gallery\\images\\p13.jpg",
    "D:\\VS code web development files\\gallery\\images\\p14.jpg",
    "D:\\VS code web development files\\gallery\\images\\p15.jpg",
    "D:\\VS code web development files\\gallery\\images\\p16.jpg"
];

function openFullImg(index) {
    currentImgIndex = index;
    fullImgBox.style.display = "flex";
    setTimeout(() => {
        fullImgBox.classList.add("show");
    }, 10); 
    fullImg.src = images[currentImgIndex];
}

function closeFullImg() {
    fullImgBox.classList.remove("show");
    setTimeout(() => {
        fullImgBox.style.display = "none";
    }, 500); 
}

function changeImg(direction) {
    currentImgIndex += direction;
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    } else if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    fullImg.style.transform = "scale(0.9)";
    setTimeout(() => {
        fullImg.src = images[currentImgIndex];
        fullImg.style.transform = "scale(1)";
    }, 250); 
}
