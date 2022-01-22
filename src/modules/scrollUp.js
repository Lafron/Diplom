const scrollUp = () => {
    const arr = document.querySelector(".up");

    arr.addEventListener("click", e => {
        // let y = document.body.scrollTop;
        // window.scrollTo(0, 0);
        // console.log(y);
        let aim = document.querySelector(".main-wrapper");
        aim.scrollIntoView({behavior: "smooth"});
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            arr.style.display = "none";
        }
        else{
            arr.style.display = "block";
        }
    });

};

export default scrollUp;