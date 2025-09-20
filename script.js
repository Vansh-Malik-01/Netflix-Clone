document.addEventListener("DOMContentLoaded", function() {
    const trendingGrid = document.querySelector(".trending-grid");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    nextBtn.addEventListener("click", () => {
        trendingGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener("click", () => {
        trendingGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });
});