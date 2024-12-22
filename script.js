function truth() {
  var a = Math.random() * 4 + 1;
  var b = Math.floor(a);
  let str = "bottle" + b + ".png";
  document.getElementsByClassName("modal-title")[0].innerHTML = "PLAYER " + b;
  document.getElementById("boootle").src = str;
  var d = document.getElementById("gabbar");
  d.play();
}
