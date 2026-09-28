/* =========================
DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

}

/* =========================
LOAD SAVED THEME
========================= */

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark");
if (themeBtn) {
    themeBtn.textContent = "☀️";
}

}

/* =========================
SECRET SURPRISE
========================= */

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn && secretMessage) {

secretBtn.addEventListener("click", function () {
    secretMessage.classList.toggle("show");
    if (secretMessage.classList.contains("show")) {
        secretBtn.textContent = "😂 ها هي المفاجأة!";
    } else {
        secretBtn.textContent = "🎁 اضغط هنا للمفاجأة";
    }
});

}

/* =========================
IMAGE GALLERY
========================= */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

function openImage(imageSrc) {

if (!imageModal || !modalImage) {
    return;
}
modalImage.src = imageSrc;
imageModal.classList.add("show");
document.body.style.overflow = "hidden";

}

function closeImage() {

if (!imageModal) {
    return;
}
imageModal.classList.remove("show");
document.body.style.overflow = "";

}

if (imageModal) {

imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
        closeImage();
    }
});

}

/* =========================
ESC KEY
========================= */

document.addEventListener("keydown", function (event) {

if (event.key === "Escape") {
    closeImage();
}

});

/* =========================
SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll("
“.info-card, .fact, .like-item, .photo-card"
);

if (cards.length > 0) {

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);
cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
});

}