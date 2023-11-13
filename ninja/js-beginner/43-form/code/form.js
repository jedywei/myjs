function main() {
    const myForm = document.forms.myForm;
    const message = document.getElementById("message");

    myForm.onsubmit = () => {
        if (myForm.name.value == "") {
            message.innerHTML = "please enter name";
            return false;
        } else {
            message.innerHTML = "";
            return true;
        }
    }
}

window.onload = main;