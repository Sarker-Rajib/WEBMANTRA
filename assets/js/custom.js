//  logo slider
var swiper = new Swiper(".logo-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    // freeMode: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 20
        },
    }
});
// -----------

// blockchain-slider
var swiper = new Swiper(".blockchain-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    // freeMode: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 20
        },
    }
});

// project slider
var swiper = new Swiper(".project-slider", {
    spaceBetween: 30,
    // freeMode: true,
    // loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 55
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 55
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 55
        },
    }
});

// testimonial slide
var swiper = new Swiper(".testimonial-slider", {
    spaceBetween: 30,
    // freeMode: true,
    // loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 55
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 55
        },
    }
});