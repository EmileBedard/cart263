class Bike {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.bike = document.createElement("div");
    }

    renderbike() {
        console.log("bike_rendered!");
        this.bike.classList.add("bikeObject");
        //add to the DOM
        document.querySelector(".main-zone").appendChild(this.bike);
    }
}