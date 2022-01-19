const carousel = () => {
    const rowServices = document.querySelector(".services-carousel");
    const elements = rowServices.querySelectorAll(".col-sm-6");

    const arrow = document.querySelector(".services-arrow");

    let currentSlide = 0;

    elements.forEach((elem, ind) => {
        if(ind > 2){
            elem.style.display = "none";
        }
    });


    const moveSlide = (elements, index) => {
        console.log(index);
        if(index >= elements.length){
            index = 0;
        }
        if(index < 0){
            index = elements.length - 1 ;
        }
        elements.forEach((elem, ind) => {
            if((ind > index - 1)&&(ind < index + 3)){
                elem.style.display = "block";
            }
            else{
                elem.style.display = "none";
            }
        });
    };

    
    arrow.addEventListener("click", e => {
        e.preventDefault();

        if(!e.target.closest("img")){
            return;
        }

        if(e.target.matches(".arrow-right")){
            currentSlide++;
        }
        else if(e.target.matches(".arrow-left")){
            currentSlide--;
        }
        
        if(currentSlide >= elements.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = elements.length - 1 ;
        }

        moveSlide(elements, currentSlide);
        
    });

};

export default carousel;