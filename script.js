document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Portfolio Loaded!");

    // Dynamic Greeting Based on Time
    function updateGreeting() {
        let greetingText = document.getElementById("greeting");
        let hours = new Date().getHours();

        if (hours < 12) {
            greetingText.textContent = "Good Morning! 🌅";
        } else if (hours < 18) {
            greetingText.textContent = "Good Afternoon! ☀️";
        } else {
            greetingText.textContent = "Good Evening! 🌙";
        }
    }

    if (document.getElementById("greeting")) {
        updateGreeting();
    }

    // Dark Mode Toggle
    const darkModeBtn = document.getElementById("dark-mode-toggle");

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
            darkModeBtn.textContent = "🌙 Dark Mode";
        }
    });
});
