const slider = () => {
    const sliderBlock = document.querySelector(".top-slider");
    const slides = document.querySelectorAll(".item");

//    console.log(sliderBlock);
  //  console.log(slides.length);

    let currentSlide = 0;
    let interval;
    //let timeInterval = 2000;

    const prevSlide = (elements, index, strClass) => {
        elements[index].classList.remove(strClass);
        //elements[index].classList.add("table");
        elements[index].style.display = "none";
    };

    const nextSlide = (elements, index, strClass) => {
        elements[index].classList.add(strClass);
        //elements[index].classList.remove("table");
        elements[index].style.display = "block";
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, "table.active");
        //prevSlide(dots, currentSlide, "dot-active");
        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, "table.active");
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