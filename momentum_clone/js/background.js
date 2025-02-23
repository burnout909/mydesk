const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const wrapper = document.getElementById("wrapper"); // wrapper 요소 선택

// wrapper 요소의 배경 이미지 변경
wrapper.style.backgroundImage = `url('img/${chosenImage}')`;
wrapper.style.backgroundSize = "cover";
wrapper.style.backgroundPosition = "center";
wrapper.style.backgroundRepeat = "no-repeat";
