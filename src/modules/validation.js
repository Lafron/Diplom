const validation = () => {
    const form = document.querySelector("form");
    const formElems = form.querySelectorAll("input");

    formElems.forEach(input => {
            if(input.name == "fio"){           
                const letters =/[^А-Яа-яёЁ]+$/;
                input.addEventListener("input", e => {
                    e.target.value = e.target.value.replace(letters, "");
                });
            }
            else if(input.name == 'tel'){
                const letters = /[^0-9\+]+$/;
                input.addEventListener("input", e => {
                    e.target.value = e.target.value.replace(letters, "");
                });
            }
        });

};

export default validation;