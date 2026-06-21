document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                event.preventDefault();
                alert("Please fill in all fields.");

            }

        });

    }

});



 function toggleDarkMode() {

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-Blue");
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("navbar-dark");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-light");
    nav.classList.toggle("bg-light");
 
 }