document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("reviewCount");
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    if (el) el.textContent = reviewCount;
});
