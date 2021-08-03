/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = inicio;

function inicio() {
  document.getElementById("draw").onclick = draw2;
  document.getElementById("sort").onclick = sort2;
}

function draw2() {
  let n = document.getElementById("numero").value;
  let numPalo;
  let numColor;
  let palo;
  let num;
  let color;

  while (n > 0) {
    numPalo = Math.floor(Math.random() * (5 - 1)) + 1;
    num = Math.floor(Math.random() * (13 - 1)) + 1;
    numColor = Math.floor(Math.random() * (3 - 1)) + 1;

    if (numPalo === 1) {
      palo = "spade";
    }
    if (numPalo === 2) {
      palo = "club";
    }
    if (numPalo === 3) {
      palo = "heart";
    }
    if (numPalo === 4) {
      palo = "diamond";
    }

    if (numColor === 1) {
      color = "rojo";
    }
    if (numColor === 2) {
      color = "negro";
    }

    armaCards(palo, color, num);
    n--;
  }
}

function sort2() {
  var padre = document.getElementsByClassName("card");
  let palo;
  let color;
  let num;
  let arrpalo;
  let arrcolor;
  let arrnum;
  for (let i = 0; i < padre.length; i++) {
    palo = padre[i].childNodes[0].classList[4];
    color = padre[i].childNodes[0].classList[5];
    num = padre[i].childNodes[1].innerText;

    arrpalo.push(palo);
    arrcolor.push(color);
    arrnum.push(num);
  }
  // let arrpalo[];
  // let arrcolor[];
  // let arrnum[];
}

function armaCards(palo, color, num) {
  var padre = document.getElementsByClassName("row1");

  var div0 = document.createElement("div"); //creamos el div
  div0.classList.add("col-1");
  div0.classList.add("m-2");

  var div1 = document.createElement("div"); //creamos el div
  div1.classList.add("container");
  div1.id = "carta1";
  div0.appendChild(div1);

  var div2 = document.createElement("div"); //creamos el div
  div2.classList.add("card");
  div2.classList.add("d-flex");
  div1.appendChild(div2);

  var div3 = document.createElement("div"); //creamos el div
  div3.classList.add("header");
  div3.classList.add("d-flex");
  div3.classList.add("flex-row");
  div3.classList.add("pl-2");
  div3.classList.add(palo);
  div3.classList.add(color);
  div2.appendChild(div3);

  var div4 = document.createElement("div"); //creamos el div
  div4.classList.add("card-body");
  var p = document.createElement("p"); // creamos el p
  p.classList.add("text-center");
  p.id = "num";
  p.textContent = num;
  div4.appendChild(p);
  div2.appendChild(div4);

  var div5 = document.createElement("div"); //creamos el div
  div5.classList.add("footer");
  div5.classList.add("d-flex");
  div5.classList.add("flex-row");
  div5.classList.add("pl-2");
  div5.classList.add(palo);
  div5.classList.add(color);
  div2.appendChild(div5);

  padre[0].appendChild(div0);

  console.log(padre[0]);
}
