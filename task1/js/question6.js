"use strict";
let writing = {
    string: 'test',
    textPts: 28,
    r: 255,
    g: 255,
    b: 255,
}

let position = 10;

let vertical = 30;

let finished = false


function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {

    drawText('test', 300, 300);

    if (finished === false) {

        for (let i = 0; i < 10; i++) {
            position += 20;
            drawText(i, position, vertical);
        }

        position = 10;

        for (let i = 0; i < 16; i++) {
            vertical += 30;
            drawText(i, position, vertical);
        }

        finished = true;
    }

}



function drawText(string, x, y) {
    push();
    fill(writing.r, writing.g, writing.b);
    noStroke();
    textSize(writing.textPts);
    text(string, x, y);
    pop();

}
