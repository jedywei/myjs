let myPara;
let myPara2;
function main() {
    myPara = document.getElementById("content").getElementsByTagName("p")[5];
    myPara2 = $("#content p:last-child");
}

window.onload = main;