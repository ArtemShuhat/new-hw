"use strict";
window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = check;
  }
};
function check(event){
    let image = event.target;
    let name = image.id;
    alert(name); 
}