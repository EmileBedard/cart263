
//global so bike can access it
let garage = {
    numBikes: 0,
    bikes: [],
}


window.onload = function () {


    let addBikeButton = document.querySelector(".addBikeButton");
    let displayBikeButton = document.querySelector(".applyBikeButton");

    displayBikeButton.addEventListener("click", function () {


    })

    addBikeButton.addEventListener("click", function () {

        garage.numBikes += 1;
        console.log("added1bike");

        let newBike = new Bike("Opus Vivace", "Road", "red");

        garage.bikes.push(newBike);
        newBike.renderbike();
    });
}