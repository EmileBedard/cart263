
//global so bike can access it
let garage = {
    numBikes: 0,
    bikes: [],
}


window.onload = function () {

    loadAllBikes();

    let addBikeButton = document.querySelector(".addBikeButton");
    let popWindow = document.querySelector(".bikeDetailsWindow")

    addBikeButton.addEventListener("click", function () {
        popWindow.style.display = "inline-block";

    });

    let bikeForm = document.getElementById("bikeForm");

    let keys = Object.keys(localStorage);
    console.log(keys);


    bikeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("nameInput").value;
        let type = document.getElementById("typeInput").value;
        let color = document.getElementById("colorInput").value;

        let key = keys.length + 1;

        console.log(name, type, color);

        let bikeData = {
            bikeName: name,
            bikeType: type,
            bikeColor: color
        };

        popWindow.style.display = "none";

        localStorage.setItem(key, JSON.stringify(bikeData));


        garage.numBikes += 1;
        console.log("added1bike");


        for (let i = 0; i < storedBikes.length; i++) {

            console.log(storedBike);
        }

        let indexedBikeArray = JSON.parse(value)

        for (let storedValue of indexedBikeArray) {
            console.log(storedValue);
        }

        let newBike = new Bike();

        garage.bikes.push(newBike);
        newBike.renderbike();

    })

    function loadAllBikes() {
        let keys = Object.keys(localStorage);
        console.log(keys);

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            let bikeDataString = localStorage.getItem(key);
            let bikeData = JSON.parse(bikeDataString);

            let newBike = new Bike(
                bikeData.bikeName,
                bikeData.bikeType,
                bikeData.bikeColor
            );

            garage.bikes.push(newBike);
            newBike.renderbike();


        }
    }


}