let person = prompt("Please enter your name", "absam");

if (person != null) {
  document.getElementById("demo").innerHTML = `Hello ${person}! How are you today?`;
}