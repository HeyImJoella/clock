function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

    if (h >= 11){
        document.getElementById("clock").src="img/beer-solid.png"
    }
    if (h >= 12){
        document.getElementById("clock").src="img/glass-cheers-solid.png"
    }
    if (h < 11){
        document.getElementById("clock").src="img/coffee-solid.png"
    }
    var t = setTimeout(startTime, 5000);

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // voegt 0 toe aan de tijd van de nummers
  return i;
}
var tl = new TimelineMax();


tl.from(".tween", 1, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -200 })
.from(".welcome", 4, {x:2000, ease:Back.easeOut}, '-=2.0')
.from("#txt", 1, {x:2000, ease:Back.easeOut}, '-=2.5')


