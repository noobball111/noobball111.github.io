var verycoolButton =  document.getElementById("verycool");
var count = 0;
function onclick() {
    count++;
    alert(`Your counted to: ${count}`);
}

if (verycoolButton.addEventListener) {
    verycoolButton.addEventListener("click", onclick, false);
} else if (verycoolButton.attachEvent) {
    verycoolButton.attachEvent('onclick', onclick);
}