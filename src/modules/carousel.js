const carousel = () => {
    const rowServices = document.querySelector(".services-carousel");
    const elements = rowServices.querySelectorAll(".col-sm-6");
    const arrow = document.querySelector(".services-arrow");

    const modWind = document.querySelector("div[class='modal-callback']");
    const backWind = document.querySelector(".modal-overlay");

    const handleMenu = e =>{
        e.preventDefault();
        backWind.style.display = "block";
        modWind.style.display = "block";

    }; 

    let currentSlide = 0;

    elements.forEach((elem, ind) => {
        if(ind > 2){
            elem.remove();
        }
    });

    const moveRight = (elements, index) => {
        if(index > 3){
            index = index - 6;
        }
        let arrElem = rowServices.querySelectorAll(".col-sm-6");

        rowServices.replaceChild(arrElem[1], arrElem[0]);
        rowServices.appendChild(elements[index + 2]);

    };

     const moveLeft = (elements, index) => {
        if(index < 0){
            index = index + 6;
        }
        let arrElem = rowServices.querySelectorAll(".col-sm-6");

        rowServices.replaceChild(arrElem[1], arrElem[2]);
        rowServices.prepend(elements[index]);

    };


    
    arrow.addEventListener("click", e => {
        e.preventDefault();

        if(!e.target.closest("img")){
            return;
        }

        if(e.target.matches(".arrow-right")){
            currentSlide++;
            moveRight(elements, currentSlide);
        }
        else if(e.target.matches(".arrow-left")){
            currentSlide--;
            moveLeft(elements, currentSlide);
        }
        
        if(currentSlide >= elements.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = elements.length - 1 ;
        }
        
    });

    rowServices.addEventListener("click", e => {
        if(e.target.closest(".col-sm-6")){
            handleMenu(e);            
        }
    });

};

export default carousel;