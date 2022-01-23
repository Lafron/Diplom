const slider = () => {
    //const sliderBlock = document.querySelector(".top-slider");
    const slides = document.querySelectorAll(".item");

    let currentSlide = 0;
    let interval;
    //let timeInterval = 2000;

    const prevSlide = (elements, index, strClass) => {
        elements[index].classList.toggle(strClass);
        //elements[index].classList.toggle("table");
        elements[index].style.display = "none";
    };

    const nextSlide = (elements, index, strClass) => {
        elements[index].classList.toggle(strClass);
        //elements[index].classList.toggle("table");
        elements[index].style.display = "block";
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, "active");
        //prevSlide(dots, currentSlide, "dot-active");
        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, "active");
        //nextSlide(dots, currentSlide, "dot-active");
    };

    const startSlide = (timer = 3000) => {
        // if(dots.length == 0){
        //     addDots();
        // }
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    startSlide(3000);

};

export default slider;