class Animal {
    constuctor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = 0;
        this.vy = 0;
        this.animalBody = document.createElement("div");
    }

    // Move the Animal according to its velocity
    move() {
        this.x += this.vx;
        this.y += this.vy;
        //update the actual div...
        this.animalBody.style.left = this.x + "px";
        this.animalBody.style.top = this.y + "px";
    }

    // Wrap the animal if it reaches the right edge
    wrap() {
        if (this.x > window.innerWidth) {
            this.x -= window.innerWidth;
        }
    }

    renderAnimal() {

    }
}