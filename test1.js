document.addEventListener("DOMContentLoaded", function () {
    // Checks localStorage state (Defaults to logged-out/false)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const loggedInViews = document.querySelectorAll(".logged-in-view");
    const loggedOutViews = document.querySelectorAll(".logged-out-view");

    if (isLoggedIn) {
        loggedInViews.forEach(el => el.classList.remove("d-none"));
        loggedOutViews.forEach(el => el.classList.add("d-none"));
    } else {
        loggedInViews.forEach(el => el.classList.add("d-none"));
        loggedOutViews.forEach(el => el.classList.remove("d-none"));
    }

    // Handles logout action
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("isLoggedIn", "false");
            window.location.reload();
        });
    }
});


