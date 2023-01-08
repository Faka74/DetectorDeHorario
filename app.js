let container = document.querySelector(".containerHijo")
let timeNow = new Date().getHours();
let greeting = timeNow >= 5 && timeNow < 12
? "Good morning"
: timeNow >= 12 && timeNow < 18
? "Good afternoon"
: "Good evening";
container.innerHTML = `<h1>${greeting}</h1>`;