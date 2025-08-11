const text = ["Web Developer", "Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typewriterElement = document.getElementById("typewriter");

    if (isDeleting) {
        currentText = text[i].substring(0, j--);
    } else {
        currentText = text[i].substring(0, j++);
    }

    typewriterElement.innerHTML = currentText;

    if (!isDeleting && j === text[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", type);

