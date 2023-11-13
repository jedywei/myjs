function  main() {
    const myMessage = document.getElementById("message");
    const colourChanger = document.getElementById("colour-changer");

    function showMessage() {
        myMessage.className = "show";
    }

    const colours = ["red", "blue", "green", "pink"];
    let counter = 0;

    function changeColour( ){
        if (counter >= colours.length)
            counter = 0;

        colourChanger.style.background = colours[counter];
        counter++;
    }

    setTimeout(showMessage, 3000);
    const myTimer = setInterval(changeColour, 2000);

    colourChanger.onclick = () => {
        clearInterval(myTimer);
        colourChanger.innerHTML = "Timer Stopped";
    }

}

window.onload = main;