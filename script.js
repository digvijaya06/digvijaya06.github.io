document.addEventListener("DOMContentLoaded", () => {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    dateTimeElement.textContent = "Last updated: " + now.toLocaleString();
});
