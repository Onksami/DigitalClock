var clock = document.getElementById("clock");
var today = document.getElementById("today");


setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

today.innerHTML = new Date().toLocaleDateString();

