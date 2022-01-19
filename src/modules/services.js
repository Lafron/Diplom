const services = () =>{
    //const servBlock;
    
    const selection = document.querySelector(".quest-section");
    const modWind = document.querySelector("div[class='modal-callback']");
    const backWind = document.querySelector(".modal-overlay");

       const handleMenu = e =>{
        e.preventDefault();
        backWind.style.display = "block";
        modWind.style.display = "block";

    }; 

    // const closeMenu = e =>{
    //     e.preventDefault();
    //     backWind.style.display = "none";
    //     modWind.style.display = "none";
    // }; 

    selection.addEventListener("click", e => {
        if(e.target.closest(".button-services")){
            handleMenu(e);            
        }
    });
};

export default services;