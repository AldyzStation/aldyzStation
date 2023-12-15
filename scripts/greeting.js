const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning Roleplayers!";
} else if (time < 18) {
  greeting = "Good day Roleplayers!";
} else {
  greeting = "Good evening roleplayers!";
}
document.getElementById("hello").innerHTML = greeting;