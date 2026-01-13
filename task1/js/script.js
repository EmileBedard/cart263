"use strict";



// used for position
let x1 = 100
let x2 = 250
let x3 = 400

let y1 = 100
let y2 = 250
let y3 = 400

// used for width (same height)
let w1 = 100
let w2 = 200
let w3 = 300

// used for color
let r1 = 20
let r2 = 60
let r3 = 80

let g = 50
let b = 50




function setup() {
    console.log("go");
    createCanvas(600, 600);
    background(0, 0, 0);
}

function draw() {

    //circle1
    push();
    fill(r1, g, b);
    noStroke();
    ellipse(x1, y1, w1);
    pop();

    //circle2
    push();
    fill(r2, g, b);
    noStroke();
    ellipse(x2, y2, w2);
    pop();

    //circle3
    push();
    fill(r3, g, b);
    noStroke();
    ellipse(x3, y3, w3);
    pop();


}