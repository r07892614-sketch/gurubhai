let time = 60;

// Redirect link
const redirectURL = "https://t.me/+ruv6TsDS0eYyZTZl";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".join-btn").addEventListener("click", () => {
        window.location.href = redirectURL;
    });

    countdown();
});

function countdown() {
    const timer = document.getElementById("timer");
    timer.textContent = time;

    if (time > 0) {
        time--;
        setTimeout(countdown, 1000);
    }
}
