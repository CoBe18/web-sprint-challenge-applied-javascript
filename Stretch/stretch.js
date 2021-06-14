const entryPoint = document.querySelector(".carousel-container");

function carouselCreator() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("carousel");

  const leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");
  leftBtn.style.backgroundColor = "hotPink";

  const img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";

  const img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";

  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  const rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");
  rightBtn.style.backgroundColor = "hotPink";

  mainDiv.append(leftBtn, img1, img2, img3, img4, rightBtn);
  entryPoint.append(mainDiv);

  return mainDiv;
}
carouselCreator();