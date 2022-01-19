const scrollUp = () => {
    const arr = document.querySelector(".up");
//    console.log(arr);

    arr.addEventListener("click", e => {
        let aim = document.querySelector(".main-wrapper");
        aim.scrollIntoView({behavior: "smooth"});
    });

    // window.addEventListener('scroll', e => {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         arr.style.display = "none";
    //     }
    //     else{
    //         arr.style.display = "block";
    //     }
    // });
};

export default scrollUp;