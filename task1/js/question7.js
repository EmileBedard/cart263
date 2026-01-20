"use strict";
let randomColorIndexR = 0;
let randomColorIndexG = 0;
let randomColorIndexB = 0;

let radius = 50;
let horizontal = radius / 2;
let vertical = radius / 2;

let length = radius;



let shape = 'ellipse';

function setup() {
    createCanvas(600, 600);

    randomColorIndexR = random(0, 255);
    randomColorIndexG = random(0, 255);
    randomColorIndexB = random(0, 255);
}

function draw() {
    background(0);

    if (shape === 'ellipse') {
        vertical = radius / 2;
        for (let i = 0; radius * i < height; i++) {

            horizontal = radius / 2
            for (let u = 0; radius * u < width; u++) {

                drawEllipse(horizontal, vertical, radius);

                horizontal += radius
            }

            vertical += radius;

        }
    }

    else if (shape === 'square') {
        vertical = 0
        for (let i = 0; radius * i < height; i++) {

            horizontal = 0
            for (let u = 0; radius * u < width; u++) {

                drawSquare(horizontal, vertical, length);

                horizontal += length + 2;
            }

            vertical += length + 2;

        }
    }

    else {

    }

}

function drawEllipse(x, y, r) {
    push();
    fill(randomColorIndexR, randomColorIndexG, randomColorIndexB);
    noStroke();
    ellipse(x, y, r);
    pop();
}

function drawSquare(x, y, r) {
    push();
    fill(randomColorIndexR, randomColorIndexG, randomColorIndexB);
    noStroke();
    rect(x, y, r);
    pop();
}

function keyPressed() {
    if (keyCode === 32) {
        randomColorIndexR = random(0, 255);
        randomColorIndexG = random(0, 255);
        randomColorIndexB = random(0, 255);

    }

}

function mousePressed() {
    if (shape === 'ellipse') {
        shape = 'square';
    }
    else {
        shape = 'ellipse';
    }
    console.log(shape);
}

