let test = document.querySelectorAll("button.drum").length;

for (i = 0; i < test; i++) {
  document
    .querySelectorAll("button.drum")[i].addEventListener("click", function () {
      let innerhtml = this.innerHTML;
      console.log(innerhtml);

      switch (innerhtml) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        default:
          break;
      }
    });
}

document.addEventListener("keypress", function (event) {
  switch (event.key) {
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
});
