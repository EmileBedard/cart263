class Bike {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }



    renderbike(id) {

        this.bike = document.createElement("div");
        this.bike.classList.add("bikeObject")
        this.bike.id = (id);

        this.bikeButton = document.createElement("button");
        this.bikeButton.innerHTML = `<p>${this.name}</p> <img src="assets/small bike element white.svg" alt="bike">`;
        this.bikeButton.style.backgroundColor = `${this.color}`;


        let menu = document.querySelector(".bikes-menu");

        menu.appendChild(this.bike);
        this.bike.appendChild(this.bikeButton);
    }
}