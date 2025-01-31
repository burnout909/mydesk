function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  greetingElement.textContent = greeting;
}

setInterval(updateTime, 1000);
updateGreeting();
