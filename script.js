const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        if (btnText === "=") {
            try {
                string = eval(string);  
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnText === "AC") {
            string = "";
            input.value = string;
        } 
        else if (btnText === "DEL") {
            string = string.slice(0, -1);  
            input.value = string;
        } 
        else {
            string += btnText;
            input.value = string;
        }
    });
});
