document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        // OPEN AND CLOSE MENU
        menuBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            navbar.classList.toggle("active");

        });

        // CLOSE WHEN CLICKING A LINK
        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

            });

        });

        // CLOSE WHEN CLICKING OUTSIDE
        document.addEventListener("click", function (event) {

            if (
                !navbar.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                navbar.classList.remove("active");
            }

        });

        // CLOSE USING ESCAPE KEY
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                navbar.classList.remove("active");
            }

        });

    }

});