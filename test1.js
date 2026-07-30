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

document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements on the page
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', (event) => {
            // Pause every video except the one that just started playing
            videos.forEach(otherVideo => {
                if (otherVideo !== event.target && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
});
