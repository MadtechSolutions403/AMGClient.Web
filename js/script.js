/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("active");

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navLinks) {

                    navLinks.classList.remove("active");

                }

            }
        );

    });


/* =========================================================
   WHATSAPP BUTTON
========================================================= */

const whatsappButton =
    document.querySelector(".whatsapp-button");

if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        function () {

            console.log(
                "Opening WhatsApp for product enquiry..."
            );

        }
    );

}


/* =========================================================
   PRODUCT ENQUIRY BUTTONS
========================================================= */

document
    .querySelectorAll(".product-button")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    "Product enquiry selected."
                );

            }
        );

    });


/* =========================================================
   CONTACT AVATAR INTERACTION
========================================================= */

const contactAvatar =
    document.querySelector(".contact-avatar");

if (contactAvatar) {

    contactAvatar.addEventListener(
        "mouseenter",
        function () {

            contactAvatar.classList.add(
                "avatar-active"
            );

        }
    );

    contactAvatar.addEventListener(
        "mouseleave",
        function () {

            contactAvatar.classList.remove(
                "avatar-active"
            );

        }
    );

}