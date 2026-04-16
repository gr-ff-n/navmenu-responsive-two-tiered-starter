//  Yet another way to add the current year to the footer
document.querySelector("#copyright").textContent = new Date().getFullYear();

const navMenu = document.getElementById("navmenu");
const navButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navMenu.getAttribute("data-visible");
    if (isVisible == "false") {
        if (navMenu.classList.contains("active")) {
            navMenu.setAttribute("data-visible", "true");
            navButton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu, 200);
        }
    }
    else {
        navMenu.setAttribute("data-visible", "false");
        navButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 300);
    }

    function dataDisplay() {
        navMenu.classList.toggle("active");
    }
}

navButton.addEventListener("click", toggleMenu);