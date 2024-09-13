new Glide('.hero-section-glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.hero-section-glide__bullets',
        clickable: true
    }
}).mount();

new Glide('.exclusive-producuts-glide', {
    type: 'carousel',
    perView: 4,
    autoplay: 9000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.hero-section-glide__bullets',
        clickable: true
    },
    breakpoints: {
        991: {
            perView: 2
        }
    }
}).mount();


new Glide('.best-sellers-glide', {
    type: 'carousel',
    perView: 4,
    autoplay: 9000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.hero-section-glide__bullets',
        clickable: true
    },
    breakpoints: {
        991: {
            perView: 2
        }
    }
}).mount();


