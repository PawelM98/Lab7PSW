//1 Zmiana tekstu 
function myFunction() {
 var text = document.getElementById("demo").innerHTML = "Tekst zmieniony !!!";
     document.getElementById("demo").style.textDecoration = "underline";
}
//2 Element - Wyświetlanie czasu i daty
function getDate(){ 
    var date = document.getElementById("time").innerHTML = Date();
   
}
//3 Czytaj dalej
function czytaj(){
 document.getElementById("czytajD").innerHTML = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ";
}
//4 Zmiana zdjęcia
document.getElementById("patrick").src= "spongebob.png";
function getInfo(){
    document.getElementById("p01").innerHTML = "Aby sprawdzić zamiane zdjęcia należy mieć dostęp do kodu JavaScript";
}
//5 Powiększanie napisu 
function napis() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
//6 Zmiana napisu po najechaniu na niego 
function mOver(obj) {
  obj.innerHTML = "BOOM ! ! !"
}
function mOut(obj) {
  obj.innerHTML = "Najedź myszką"
}
//7 Wyświetlenie daty za pomocą eventlistener
document.getElementById("newDateButton").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("newDateId").innerHTML = Date();
}

//8 Zmiana z h1 na p
function changeh1(){
     document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
}
//9 Wyświetlenie zawartości kodu 
alert(document.documentElement.innerHTML);
//10 H3
 document.getElementById("H302").innerHTML = document.getElementById("H3").nodeName;
//11 3
 document.getElementById("302").innerHTML = document.getElementById("3").firstChild.nodeType;
//12 Utworzenie nowego elementu poprezz create
var para = document.createElement("p");
var node = document.createTextNode("Nowy paragraf");
para.appendChild(node);
//umieszczenie na początku 
var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);
//13 Usunięcie danego napisu 
function deleteMessage(){
var messageDelete = document.getElementById("p2")
messageDelete.remove();
}
//14 Usunięcie elementu child i dodanie nowego
function deleteMushroom(){
var parent = document.getElementById("pizzaParent");
var child = document.getElementById("pizzaSP");
parent.removeChild(child);
}
function addSalami(){
    var typ = document.createElement("p");
    var salami = document.createTextNode("Pizza z szynką i salami");
    typ.appendChild(salami);
    var element =  document.getElementById("pizzaParent");
    var child = document.getElementById("guzik");
    element.insertBefore(typ,child);
}
//15 Znalezienie drugiego elementu p
var paragraf = document.getElementsByTagName("p");
document.getElementById("parC").innerHTML =
"Drugim elementem p jest : " +
paragraf[1].innerHTML;

//16 Zmiana kolorów wszystkich elementow p
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeP() {
  var elementp = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < elementp.length; i++) {
    elementp[i].style.color = getRandomColor();
  }
}
//17 Obliczenie wszystkich paragrafów
var liczba = document.querySelectorAll("p");
document.getElementById("liczenie").innerHTML =
"Ta strona zawiera" + liczba.length + " paragrafów.";

//18 zmiana napisu poprzez wpis
function napisZamiana() {
  var x = document.getElementById("fzmiana");
  document.getElementById("doZmiany").innerHTML = x.value;
}
//19 Loading
//var x = document.getElementById("myProgress");
//console.log(x);
//var width = 77;
//
//var k = 0;
//function moveBar() {
//  if (k == 0) {
//    k = 1;
//    var elem = document.getElementsById("myBar");
//    var width = 10;
//    var id = setInterval(frame, 30);
//    function frame() {
//      if (width >= 100) {
//        clearInterval(id);
//        k = 0;
//      } else {
//        width++;
//        elem.style.width = width + "90%";
//        elem.innerHTML = width + "%";
//      }
//    }
//  }
//}
//20 Bar HTML CSS JS PHP

//HTML
var x = document.getElementById("myProgressHTML");
console.log(x);
var width = 77;

var k = 0;
function moveHTML() {
  if (k == 0) {
    k = 1;
    var elem = document.getElementById("myBarHTML");
    var width = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        k = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
////CSS
//var x = document.getElementsById('myBarCSS');
//console.log(x);
//var width = 77;
//
//var k = 0;
//function moveHTML() {
//  if (k == 0) {
//    k = 1;
//    var elem = document.getElementById("myBarCSS");
//    var width = 10;
//    var id = setInterval(frame, 50);
//    function frame() {
//      if (width >= 80) {
//        clearInterval(id);
//        k = 0;
//      } else {
//        width++;
//        elem.style.width = width + "%";
//        elem.innerHTML = width + "%";
//      }
//    }
//  }
//}
////JS
//var x = document.getElementsById('myBarJS');
//console.log(x);
//var width = 77;
//
//var k = 0;
//function moveJS() {
//  if (k == 0) {
//    k = 1;
//    var elem = document.getElementById("myBarJS");
//    var width = 10;
//    var id = setInterval(frame, 50);
//    function frame() {
//      if (width >= 85) {
//        clearInterval(id);
//        k = 0;
//      } else {
//        width++;
//        elem.style.width = width + "%";
//        elem.innerHTML = width + "%";
//      }
//    }
//  }
//}
////PHP
//var x = document.getElementsById('myBarPHP');
//console.log(x);
//var width = 77;
//
//var k = 0;
//function moveHTML() {
//  if (k == 0) {
//    k = 1;
//    var elem = document.getElementById("myBarPHP");
//    var width = 10;
//    var id = setInterval(frame, 50);
//    function frame() {
//      if (width >= 10) {
//        clearInterval(id);
//        k = 0;
//      } else {
//        width++;
//        elem.style.width = width + "%";
//        elem.innerHTML = width + "%";
//      }
//    }
//  }
//}
