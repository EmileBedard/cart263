class Dog extends Animal {
    // Create a new Dog object that moves to the right
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
    }

    // Display the dog as a ellipse
    renderAnimal() {
        super.renderAnimal();
        this.animalBody.classList.add("animal");
        this.animalBody.style.width = this.width + "px";
        this.animalBody.style.height = this.height + "px";
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
        this.animalBody.style.borderRadius = this.width + "px";
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.animalBody);
    }
}