function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}`;
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

function updateInput() {
  const inputElement = document.getElementById("focus-input");
  const displayElement = document.getElementById("display-text");
  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const inputValue = inputElement.value.trim();

      if (inputValue !== "") {
        localStorage.setItem("savedInput", inputValue); // 값 저장
        displayElement.textContent = inputValue;
        inputElement.style.display = "none";
        displayElement.style.display = "block";
      }
    }
  });
}

function fetchImageElement() {
  const accessKey = ""; //accessKey 입력하면 됨
  const bodyElement = document.body;
  fetch(
    `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${accessKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      bodyElement.style.backgroundImage = `url(${data.urls.full})`;
    })
    .catch((error) => console.error("이미지 불러오기 실패: ", error));
}

setInterval(updateTime, 1000);
updateGreeting();
updateInput();
fetchImageElement();
