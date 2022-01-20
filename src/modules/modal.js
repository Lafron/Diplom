"use strick";

const modal = () => {
    const modWind = document.querySelector("div[class='modal-callback']");
    const backWind = document.querySelector(".modal-overlay");
    
    const modalCallback = document.querySelector(".modal-callback");
    const main = document.querySelector(".main-wrapper");

    const form = document.querySelector("form");
    const formElems = form.querySelectorAll("input");

    const handleMenu = e =>{
        e.preventDefault();
        backWind.style.display = "block";
        modWind.style.display = "block";

        formElems.forEach(input => {
            if(input.type != "submit"){
                input.value = "";
            }
        });
    }; 

    const closeMenu = e =>{
        e.preventDefault();
        backWind.style.display = "none";
        modWind.style.display = "none";
        
    }; 

    main.addEventListener("click", e => {
        if(e.target.closest(".callback-btn")){
            handleMenu(e);            
        }
        
    });

    modalCallback.addEventListener("click", e => {
        if(e.target.closest(".modal-close")){
            closeMenu(e);
        }
    });

    backWind.addEventListener("click", e => {
         closeMenu(e);
    });

};

export default modal;