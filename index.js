// Write your code here!
main.remove(); //removes main from DOM
const newHeader = document.createElement("h1")//Creates newHeader, h1 element

newHeader.id = 'victory'//gives newHeader id of 'victory'
newHeader.innerHTML = "Shane is the champion"
document.body.append(newHeader)//appends newHeader to DOM
