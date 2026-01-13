"use strict";

function setup() {
    console.log("go");
    createCanvas(600, 600);
    background(0, 0, 0);

    drawEllipse(100, 100, 80, 80, 20, 70, 40);
    drawEllipse(200, 200, 100, 100, 70, 30, 40);
    drawEllipse(300, 200, 200, 200, 30, 80, 50);

}

function draw() {

}

function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}