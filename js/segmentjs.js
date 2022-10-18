const ctaButton = document.querySelector('#navbarSupportedContent > ul > li:nth-child(4)');
ctaButton.addEventListener('click', function() {
    console.log('contactNowClick');
    window.analytics.track('contactNowClick');
});

const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameField = document.querySelector("#fullName");
    console.log(nameField.value);
    let leadName = nameField.value
    window.analytics.track('contactFormSubmitted', {
        leadName
    });
    contactForm.reset();
});

const buyButtons = document.querySelectorAll('body > section.shop_section.layout_padding > div > div.row > div > div > a');
buyButtons.forEach((buyButton) => {
    buyButton.addEventListener('click', function() {
        var price = buyButton.querySelector('h6 > span');
        price = price.innerHTML.split('$')[1].replace(/\s/g,'');
        window.analytics.track('buyButtonClick', {
            amount: parseFloat(price)
        });
    });
})