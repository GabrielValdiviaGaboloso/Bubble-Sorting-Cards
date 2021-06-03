/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
 

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
  let numPalo;
  let numColor;
  let palo;
  let num;
  let color;

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

  console.log("Palo:" + palo, " numero:" + num + " color:" + color);

  let cardHeader = document.getElementsByClassName("header");
  cardHeader[0].classList.add(palo);
  cardHeader[0].classList.add(color);

  document.getElementById("num").innerHTML = num;

  let cardFooter = document.getElementsByClassName("footer");
  cardFooter[0].classList.add(palo);
  cardFooter[0].classList.add(color);
};
