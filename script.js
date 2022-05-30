"use strict";

let item = document.querySelector(".item");
let plaseholders = document.querySelectorAll(".placeholder");

for (let plaseholder of plaseholders) {
    plaseholder.addEventListener("dragover", dragover),
        plaseholder.addEventListener("dragenter", dragenter),
        plaseholder.addEventListener("dragleave", dragleave),
        plaseholder.addEventListener("drop", drop);
}

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart(event) {
    event.target.classList.add("hold");
    setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
    event.target.classList.remove("hold");
    event.target.classList.remove("hide");
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add("hovered");
}

function dragleave(event) {
    event.target.classList.remove("hovered");
}

function drop(event) {
    event.target.append(item);
    event.target.classList.remove("hovered");
}