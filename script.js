document.addEventListener("DOMContentLoaded", function () {

 

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


   

    const cards = document.querySelectorAll(
        ".skill-card, .about-card"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card) {
            observer.observe(card);
        });

    } else {

        cards.forEach(function (card) {
            card.classList.add("visible");
        });

    }


    const navLinks = document.querySelectorAll(
        ".navbar a"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbar = document.querySelector(
                ".navbar-collapse"
            );

            if (
                navbar &&
                navbar.classList.contains("show")
            ) {

                navbar.classList.remove("show");

            }

        });

    });


    // =========================
    // TELEGRAM BUTTON
    // =========================

    const telegramButton = document.querySelector(
        ".contact-button"
    );

    if (telegramButton) {

        telegramButton.addEventListener(
            "mouseenter",
            function () {
                telegramButton.classList.add("button-hover");
            }
        );

        telegramButton.addEventListener(
            "mouseleave",
            function () {
                telegramButton.classList.remove("button-hover");
            }
        );

    }


   

    const photo = document.querySelector(".my-photo");

    if (photo) {

        photo.addEventListener("error", function () {

            photo.style.display = "none";

            const photoWrapper = document.querySelector(
                ".photo-wrapper"
            );

            if (photoWrapper) {

                photoWrapper.style.background =
                    "linear-gradient(180deg, #444444, #111111)";

            }

        });

    }

});
