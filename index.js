// Write your code here!
const body = document.getElementsByTagName("body")[0];
body.removeChild(body.querySelector("main"));

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Shane is the champion";