"use strict";


function setup() {
    console.log("go");
    createCanvas(600, 600);

}

function draw() {
    background(0, 0, 0);

    drawRectangle(x1, y1, w1, h1, r1, g1, b1);
    drawRectangle(x2, y2, w2, h2, r2, g2, b2);
    drawRectangle(x3, y3, w3, h3, r3, g3, b3);

    y3 += 6;

    checkRect1();
    checkRect2();
    checkRect3();

}

//rectangle1
let x1 = 0
let y1 = 0
let w1 = width / 3
let h1 = height
let r1 = 0
let g1 = 0
let b1 = 100

//rectangle2
let x2 = 200
let y2 = 100
let w2 = 100
let h2 = 100
let r2 = 100
let g2 = 200
let b2 = 100

//rectangle3
let x3 = 300
let y3 = 100
let w3 = 100
let h3 = 100
let r3 = 255
let g3 = 100
let b3 = 100

function drawRectangle(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

// listens to mouse clicks to add value to rect1 position on x and y
function mousePressed() {
    x1 += 30;
    y1 += 30;
}

// listens to key clicks to add value to rect2 position on x and y
function keyPressed() {
    if (keyCode === 32) {
        x2 += 40;
        y2 += 20;
    }
}

function mouseMoved() {
    r3 = random(0, 255);
    g3 = random(0, 255);
    b3 = random(0, 255);

}


// a set of three functions to bring back the rectangles in bounds when outside

function checkRect1() {
    if (x1 > width) {
        x1 = 0;
    }
    if (y1 > height) {
        y1 = 0;
    }
}

function checkRect2() {
    if (x2 > width) {
        x2 = 0;
    }
    if (y2 > height) {
        y2 = 0;
    }
}

function checkRect3() {
    if (x3 > width) {
        x3 = 0;
    }
    if (y3 > height) {
        y3 = 0;
    }
}