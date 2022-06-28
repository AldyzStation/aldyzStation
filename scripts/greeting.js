const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning Mother Fucker!";
} else if (time < 18) {
  greeting = "Good day gob shit!";
} else {
  greeting = "Good evening Crack Head!";
}
document.getElementById("hello").innerHTML = greeting;