const time = new Date().getHours();
const greeting = time < 12 ? "Good Morning Mother Fucker!" : time < 18 ? "Good day gob shit!" : "Good evening Crack Head!";
document.getElementById("hello").innerHTML = greeting;