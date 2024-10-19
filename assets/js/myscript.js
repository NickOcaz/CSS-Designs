
function test() {
    alert("I am not lying!");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hoverDiv").onmouseover = function() { hoverFunction(); };
});

function hoverFunction() {
    alert("You hovered over the div!");
}