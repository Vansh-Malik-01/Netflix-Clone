document.addEventListener("DOMContentLoaded", function() {
    const trendingGrid = document.querySelector(".trending-grid");
    const prevBtnContainer = document.querySelector(".s_btn");
    const nextBtnContainer = document.querySelector(".s_end_btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const getScrollAmount = () => {
        const trendingCard = document.querySelector(".trending-card");
        if (!trendingCard) return 300; // Fallback

        const gridStyles = window.getComputedStyle(trendingGrid);
        const cardMargin = parseFloat(gridStyles.gap) || 40; // Use gap, fallback to 40
        const cardWidth = trendingCard.offsetWidth;
        return (cardWidth + cardMargin) * 4;
    };

    const handleScrollButtons = () => {
        const scrollLeft = trendingGrid.scrollLeft;
        const scrollWidth = trendingGrid.scrollWidth;
        const clientWidth = trendingGrid.clientWidth;

        if (scrollLeft === 0) {
            prevBtnContainer.classList.add("hidden");
        } else {
            prevBtnContainer.classList.remove("hidden");
        }

        if (scrollLeft + clientWidth >= scrollWidth - 1) { // -1 for precision issues
            nextBtnContainer.classList.add("hidden");
        } else {
            nextBtnContainer.classList.remove("hidden");
        }
    };

    nextBtn.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        trendingGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        trendingGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    trendingGrid.addEventListener("scroll", handleScrollButtons);
    window.addEventListener("resize", handleScrollButtons); // Handle resize
    handleScrollButtons(); // Initial check
});