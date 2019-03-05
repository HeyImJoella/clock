function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

    if (h >= 16){
        document.getElementById("clock").src="img/beer-solid.png"
    }
    if (h >= 20){
        document.getElementById("clock").src="img/glass-cheers-solid.png"
    }
    if (h < 16){
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

TweenMax.from(".tween", 3, {x:100, ease:Elastic.easeOut});