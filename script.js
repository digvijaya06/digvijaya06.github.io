function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    document.getElementById("date-time").textContent = formatted;
}

// Update immediately, then every second
updateDateTime();
setInterval(updateDateTime, 1000);
