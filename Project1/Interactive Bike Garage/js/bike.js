class Bike {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.bike = document.createElement("div");
    }

    renderbike() {
        console.log("bike_rendered!");
        this.bike.classList.add("bike");
        //add to the DOM
        document.querySelector("selector").appendChild(this.bike);
    }
}