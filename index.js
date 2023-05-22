var count = 0
const verycoolButton =  document.getElementById("verycool")
verycoolButton.onclick = function() {
    count++;
    alert(`Your counted to: ${count}`);
}