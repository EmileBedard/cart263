"use strict";

let counter = 0;

let isOver = false;
let isClicked = false;

let square = {
    x: 200,
    y: 80,
    w: 100,
    h: 100,
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

    console.log(counter)

}

function checkCollisionWithSquare() {
    if (isOver === true) {
        square.r = 255; // lighter orange
        square.g = 120;
        square.b = 80;

        if (isOver === true && isClicked === true) {
            console.log("checked!");
            counter += 1;
            isClicked = false;

        }
    }


    else {
        square.r = 255; // original color
        square.g = 80;
        square.b = 0;
    }
}

function mouseMoved() {
    if (mouseX > 200 && mouseX < 300 && mouseY > 80 && mouseY < 180) {
        isOver = true;
    }
    else {
        isOver = false;
    }
}

function mouseClicked() {
    if (mouseX > 200 && mouseX < 300 && mouseY > 80 && mouseY < 180) {
        isClicked = true;
    }
    else {

    }
}


function displaySquare() {
    push();
    noStroke();
    fill(square.r, square.g, square.b);
    rect(square.x, square.y, square.w, square.h);
    pop();
}