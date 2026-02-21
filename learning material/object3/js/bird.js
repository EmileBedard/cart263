class Bird extends Animal {
    // Create a new bird object that moves to the right
    constructor(x, y, width, height) {

        //calls the constructor of superclass
        super(x, y, width, height)

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = Math.random() * 5 + 1;
        this.vy = 0;
        this.animalBody = document.createElement("div");


        this.originalY = this.y;

        //ONLY in the Bird class : new variables
        this.angle = 0;
        this.sleepiness = 0.1;
    }

    // override A - p1
    // Move the Animal according to its velocity
    move() {
        //console.log("go");

        this.y = this.originalY + Math.sin(this.angle) * 8
        this.angle += 0.05;

        super.move();
    }

    // Display the bird as a ellipse
    renderAnimal() {
        console.log("render move!");
        super.renderAnimal();
        this.animalBody.classList.add("animal");
        this.animalBody.style.width = this.width + "px";
        this.animalBody.style.height = this.height + "px";
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
        this.animalBody.style.borderRadius = this.width + "px";
        this.animalBody.style.backgroundColor = `rgb(106, 90, 205)`;
        //add to the DOM
        document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
    }
}