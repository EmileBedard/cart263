"use strict";

let counter = 0;

let isOver = false;

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
    checkCollisionWithSquare();

}

function checkCollisionWithSquare() {
    if (isOver === true) {
        square.r = 255; // lighter orange
        square.g = 120;
        square.b = 80;
    }
    else {
        square.r = 255; // original color
        square.g = 80;
        square.b = 0;
    }
}

function mouseMoved() {
    if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400) {
        isOver = true;
    }
    else {
        isOver = false;
    }
}

function displaySquare() {
    push();
    noStroke();
    fill(square.r, square.g, square.b);
    rect(square.x, square.y, square.w, square.h);
    pop();
}