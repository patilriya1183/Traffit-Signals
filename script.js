
let stopEl = document.getElementById("stop");

let readyEl = document.getElementById("ready");

let goEl = document.getElementById("go");


let redEl = document.getElementById("red");

let yellowEl = document.getElementById("yellow");

let greenEl = document.getElementById("green");


function resetColor(){
    
  stopEl.style.backgroundColor = "rgb(30, 30, 53)";
  readyEl.style.backgroundColor = "rgb(30, 30, 53)";
  goEl.style.backgroundColor = "rgb(30, 30, 53)";

  redEl.style.backgroundColor = "rgb(73, 80, 83)";
  yellowEl.style.backgroundColor = "rgb(73, 80, 83)";
  greenEl.style.backgroundColor = "rgb(73, 80, 83)";

}

function colorStop(){

    resetColor();

    stopEl.style.backgroundColor = "red";
    redEl.style.backgroundColor = "red";

}

function colorReady(){

    resetColor();

    readyEl.style.backgroundColor = "yellow";
    yellowEl.style.backgroundColor = "yellow";

}

function colorGo(){

    resetColor();

    goEl.style.backgroundColor = "green";
    greenEl.style.backgroundColor = "green";

}