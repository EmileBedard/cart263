"use strict";

let counter = 0;

let square = {
    x: 200,
    y: 200,
    w: 200,
    h: 200,
    r: 255,
    g: 80,
    b: 0
}
function setup() {
    console.log("go");
    createCanvas(600, 600);

}

function draw() {
    background(0, 0, 0);

    displaySquare()

}

function mouseMoved() {
    if (mouseX > 200 && mouseX < 400 && mou
}

function displaySquare() {
    push();
    noStroke();
    fill(square.r, square.g, square.b);
    rect(square.x, square.y, square.w, square.h);
    pop();
}