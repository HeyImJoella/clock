function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

    if (h >= 12){
        document.getElementById("clock").src="img/beer-solid.png"
    }
    if (h >= 23){
        document.getElementById("clock").src="Sad.jpg"
    }
    if (h < 12){
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
  if (i < 10) {i = "0" + i};  // voegt 0 toe aan de nummers
  return i;
}


// eerste test versie

// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();

//     // print time 
//     document.getElementById("time").innerHTML = h + ":" + m + ":" + s;


//     // switch on time of day
//     if (h >= 16){

//         animateClock();
//         document.getElementById("clock").src="Hans_Bier.jpg.jpeg";

//     }
//     if (h >= 23){
//         document.getElementById("clock").src="Sad.jpg";
//     }
//     if (h < 16){
//         document.getElementById("clock").src="Hans_GeenBier.jpeg";
//     }
//     var t = setTimeout(startTime, 5000);
// }