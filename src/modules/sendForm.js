const sendForm = () => {
    const form = document.querySelector("form");
    const modWind = document.querySelector("div[class='modal-callback']");
    const backWind = document.querySelector(".modal-overlay");
    const submit = form.querySelector("input[type='submit']");

    const statusBlock = document.createElement("div");

    const loadText = "идет отправка";
    const errorText = "Ошибка";
    const successText = "отправлено";
    
    const validate = list =>{
        let success = true;

        list.forEach(input => {
            let div = input.parentNode.querySelector("div");
            if(div!=null){
                div.remove();
            }
            
            let errDiv = document.createElement("div");
            errDiv.textContent = "";
            input.before(errDiv);

            if(input.name == "fio"){ 
                if(input.value == ""){
                    errDiv.textContent = "введите ваше имя";                    
                    success = false;
                    return success;
                } 
                else {
                    input.parentNode.querySelector("div").remove();
                    errDiv.textContent = "";         
                    const letters = /^[А-Яа-яёЁ]+$/;
                    if(!input.value.match(letters)){
                        success = false;
                        return success;
                    }
                }       
                    
            }
            else if(input.name == 'tel'){
                if(input.value == ""){
                    errDiv.textContent = "введите номер телефона";
                    success = false;
                    return success;
                }
                else{
                    input.parentNode.querySelector("div").remove();
                    errDiv.textContent = "";
                    const letters = /[^0-9\+]+$/;
                    if(input.value.match(letters)){
                        success = false;
                        return success;
                    }    
                }
                
            }
        });
        return success;
    };

    const sendForm = data => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () =>{
        const formElems = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        if(validate(formElems)){
            statusBlock.textContent = loadText;
            form.after(statusBlock);
        }
        
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if(validate(formElems)){
            sendForm(formBody).then(data => {
                statusBlock.textContent = successText;
                
                formElems.forEach(input => {
                    input.value = "";
                    submit.value = "Отправить";
                });
                setTimeout(() => {
                   statusBlock.textContent = "";
                   backWind.style.display = "none";
                   modWind.style.display = "none";      
                }, 2000);
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        }
        else{
            //console.log("данные невалидны!");
        }
    };
   
    try{
         if(!form){
            throw new Error("Верните форму на место!");
        }

        form.addEventListener("submit", e => {
            e.preventDefault();
            submitForm();
        });
    }
    catch(error){
        console.log(error.message);
    }
    

};

export default sendForm;
