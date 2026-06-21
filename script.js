// Плавна анімація появи секцій при скролі
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        sections.forEach((s) => observer.observe(s));
    } else {
        // Fallback для старих браузерів
        sections.forEach((s) => s.classList.add("visible"));
    }

    // Підсвічування рядка таблиці при наведенні (доступність)
    const rows = document.querySelectorAll(".hay-table tbody tr");
    rows.forEach((row) => {
        row.addEventListener("focus", () => row.classList.add("focused"), true);
        row.addEventListener("blur", () => row.classList.remove("focused"), true);
    });
});