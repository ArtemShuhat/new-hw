window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
  }
};

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/" + name;
  setTimeout(showAnswer, 2000, image);
}

function showBlur(image) {
  console.log(image);
  let name = image.id;
  name = name + "blur.jpg";
  image.src = "images/" + name;
}
