window.onload = function () {
    let garage = {
        numBikes: 0,
        bikes: [],
    }

    // // Create our bikes
    // //  by counting up to the number of the bikes
    // for (let i = 0; i < garage.numBikes; i++) {
    //     // NEW! Create a new bike
    //     let bike = new Bike();
    //     // Add the bike to the array of bikes
    //     garage.bikes.push(bike);
    // }


    let registerButton = document.getElementById("addBikeButton");

    registerButton.addEventListener("click", function () {
        //Increment the count
        garage.numBikes += 1;
        console.log("added1bike");

        //Create the new Bike instance
        let newBike = new Bike("MyBike", "Road", "Black");

        // 3. Add it to your array
        garage.bikes.push(newBike);

        // 4. Render it immediately!
        newBike.renderbike();
    });
}