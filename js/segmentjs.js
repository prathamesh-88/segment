document.addEventListener('load', function() {
    const ctaButtons = document.querySelectorAll('#customCarousel1 .btn1');
    ctaButtons.forEach((ctaButton) => {
        ctaButton.addEventListener('click', function() {
            window.analytics.track('ctaClick');
        });
    })
 

    const buyButtons = document.querySelectorAll('body > section.shop_section.layout_padding > div > div.row > div > div > a');
    buyButtons.forEach((buyButton) => {
        buyButton.addEventListener('click', function() {
            var price = buyButton.querySelector('h6 > span');
            price = price.innerHTML.split('$')[1].replace(/\s/g,'');
            window.analytics.track('buyButtonClick', {
                amount : price,
                currency: 'USD',
                amt: parseFloat(price)
            });
        });
    })
});