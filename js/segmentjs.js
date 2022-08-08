document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('#customCarousel1 > div > div.carousel-item.active > div > div > div:nth-child(1) > div > div > a');
    ctaButton.addEventListener('click', function() {
        window.analytics.track('ctaClick');
    });
});