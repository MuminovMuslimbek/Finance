document.getElementById("menubar").addEventListener("change", function() {
    const menu = document.getElementById("menu");
    const contactBtn = document.getElementById("contactBtn");

    if (this.checked) {
        menu.style.display = "block";
        contactBtn.style.display = "block";
    } else {
        menu.style.display = "none";
        contactBtn.style.display = "none";
    }
});

window.addEventListener('resize', function() {
    const menu = document.getElementById("menu");
    const contactBtn = document.getElementById("contactBtn");

    if (window.innerWidth > 878) {
        menu.style.display = "flex";
        contactBtn.style.display = "block";
    } else {
        menu.style.display = "none";
        contactBtn.style.display = "none";
        document.getElementById("menubar").checked = false;
    }
});

document.getElementById("menubar").addEventListener("change", function() {
    const menu = document.getElementById("menu");
    const contactBtn = document.getElementById("contactBtn");

    if (this.checked) {
        menu.style.display = "flex";
        contactBtn.style.display = "none";
    } else {
        menu.style.display = "none";
        contactBtn.style.display = "none";
    }
});