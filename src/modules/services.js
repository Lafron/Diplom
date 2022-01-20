const services = () =>{
    const selection = document.querySelector(".quest-section");
    const modWind = document.querySelector("div[class='modal-callback']");
    const backWind = document.querySelector(".modal-overlay");

       const handleMenu = e =>{
        e.preventDefault();
        backWind.style.display = "block";
        modWind.style.display = "block";

    }; 

    selection.addEventListener("click", e => {
        if(e.target.closest(".button-services")){
            handleMenu(e);            
        }
    });
};

export default services;