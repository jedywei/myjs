function setUpEvents() {
    const content = document.getElementById("content");
    const show = document.getElementById("show-more");

    show.onclick = () => {
        if (content.className == "open") {
            // close content
            content.className = "";
            show.innerHTML = "Show More";
        } else {
            // open content
            content.className = "open";
            show.innerHTML = "Show Less";
        }
    };
}

window.onload = () => {
    console.log("window.onload done");
    setUpEvents();
};

