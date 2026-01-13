"use strict";

//rectangle1
let x1 = 0
let y1 = 0
let w1 = 200
let h1 = 600
let r1 = 0
let g1 = 0
let b1 = 100

//rectangle2
let x2 = 200
let y2 = 0
let w2 = 200
let h2 = 600
let r2 = 0
let g2 = 0
let b2 = 170

//rectangle3
let x3 = 400
let y3 = 0
let w3 = 200
let h3 = 600
let r3 = 0
let g3 = 0
let b3 = 255


function setup() {
    console.log("go");
    createCanvas(600, 600);

}

function draw() {
    background(0, 0, 0);

    drawRectangle(x1, y1, w1, h1, r1, g1, b1);
    drawRectangle(x2, y2, w2, h2, r2, g2, b2);
    drawRectangle(x3, y3, w3, h3, r3, g3, b3);

}

function drawRectangle(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

function mouseMoved() {

    // rectangle1
    if (mouseX > 0 && mouseX < 200) {
        r1 = 255;
        g1 = 255;
        b1 = 255;
    }

    else {
        r1 = 0;
        g1 = 0;
        b1 = 100;
    }

    // rectangle2
    if (mouseX > 200 && mouseX < 400) {
        r2 = 255;
        g2 = 255;
        b2 = 255;
    }

    else {
        r2 = 0;
        g2 = 0;
        b2 = 170;
    }

    // rectangle 3
    if (mouseX > 400 && mouseX < 600) {
        r3 = 255;
        g3 = 255;
        b3 = 255;
    }

    else {
        r3 = 0;
        g3 = 0;
        b3 = 255;
    }

}
