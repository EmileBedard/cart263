"use strict";

let counter = 0;

let isOver = false;
let isClicked = false;

let radius = 50;
let ellipseAlpha = 30;
let nbEllipses = 0

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
    background(0);
}

function draw() {


    displaySquare()
    checkCollisionWithSquare();

    if (counter >= 1 && counter <= 10) {
        while (nbEllipses < counter) {
            radius += 30;

            if (ellipseAlpha < 255) {
                ellipseAlpha += 10;
            }
            else {
                ellipseAlpha = 255;
            }

            drawEllipse(300, 300, radius, ellipseAlpha);

            nbEllipses++;
            console.log(nbEllipses);
            console.log(ellipseAlpha);

        }
    }

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

function drawEllipse(x, y, w, a) {
    push();
    fill(255, 255, 255, a);
    noStroke();
    ellipse(x, y, w)
    pop();
}