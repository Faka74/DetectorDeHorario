let container = document.querySelector(".containerHijo")
let timeNow = new Date().getHours();
let greeting = timeNow >= 5 && timeNow < 12
? "Buenos dias"
: timeNow >= 12 && timeNow < 18
? "Buenas tardes"
: "Buenas noches";
container.innerHTML = `<h1>${greeting}</h1>`;