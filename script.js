const themeToggle = document.querySelector("#theme-toggle");
const aboutToggle = document.querySelector("#about-toggle");
const aboutText = document.querySelector("#about-text");
const skillsToggle = document.querySelector("#skills-toggle");
const skills = document.querySelector("#skills");
const copyEmail = document.querySelector("#copy-email");
const feedback = document.querySelector("#feedback");

const email = "your-email@example.com";

// Restore the saved theme, if there is one.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Switch Theme";
}

// Switch between dark and light themes.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "🌙 Switch Theme" : "☀️ Switch Theme";
});

// Reveal or hide the extra biography.
aboutToggle.addEventListener("click", function () {
    aboutText.hidden = !aboutText.hidden;
    aboutToggle.textContent = aboutText.hidden ? "More About Me" : "Show Less";
});

// Hide or show the skill tags.
skillsToggle.addEventListener("click", function () {
    skills.hidden = !skills.hidden;
    skillsToggle.textContent = skills.hidden ? "Show Skills" : "Hide Skills";
});

// Copy the email address to the clipboard.
copyEmail.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(email);
        feedback.textContent = "Email copied successfully!";
    } catch (error) {
        feedback.textContent = "Clipboard unavailable. Update your email in script.js and copy it manually: " + email;
    }
});
