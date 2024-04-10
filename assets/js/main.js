var music = document.getElementById("playMusic");
music.volume = 0.5;
function playMusic() {
  music.play();
}
document.addEventListener("click", playMusic);

var music = document.getElementById("playMusic");
music.volume = 0.5;
function playMusic() {
  music.play();
}
document.addEventListener("click", playMusic);

var typewriter = document.getElementById("typewriter");
var text = "Saya Altaf Hafizun mengucapkan";
var i = 0;
var speed = 100;

function typeWriter() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});
