
//global so bike can access it
let garage = {
    numBikes: 0,
    bikes: [],
}


window.onload = function () {


    let addBikeButton = document.querySelector(".addBikeButton");


    addBikeButton.addEventListener("click", function () {

        garage.numBikes += 1;
        console.log("added1bike");

        let newBike = new Bike("MyBike", "Road", "blue");

        garage.bikes.push(newBike);
        newBike.renderbike();
    });
}