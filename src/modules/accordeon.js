const accordeon = () => {
    const selection = document.querySelector(".accordeon-section");
    const accElements = selection.querySelectorAll(".element");
    const elements = document.querySelectorAll(".element");

    const handleMenu = e =>{
        closeAccordion();

        const element = e.target.parentNode;
        const title = element.querySelector(".title");
        const content = element.querySelector(".element-content");
        
        element.classList.toggle("active");
        title.classList.toggle("active");

        content.style.display = "block";
    };

    const closeAccordion = () => {
        accElements.forEach(acc => {
            let title = acc.querySelector(".title");
            let content = acc.querySelector(".element-content");

            acc.classList.remove("active");
            title.classList.remove("active");
            content.style.display = "none";
        });
    };


    selection.addEventListener("click", e => {
        //console.log("selection");
        if(e.target.closest(".title")){
            handleMenu(e);            
        }
    });
};

export default accordeon