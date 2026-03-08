
let currentBikeId = null;
let bikeInfo = null;

document.addEventListener("click", function (event) {

    if (event.target.closest(".bikeObject")) {

        let bikeId = event.target.closest(".bikeObject").id
        currentBikeId = bikeId;

        let bikeDataString = localStorage.getItem(bikeId);
        let fetchedData = JSON.parse(bikeDataString);
        bikeInfo = fetchedData;

        // here we apply everything we already know to the fields we want. Preexisting data is bikeName, bikeColor and bikeType
        let infographicTitle = document.getElementById("infographic-name")
        infographicTitle.style.color = fetchedData.bikeColor;
        infographicTitle.innerHTML = "Anatomy Of " + fetchedData.bikeName;

        let emptyFrameSVG = document.getElementById("empty-frame").style.stroke = fetchedData.bikeColor

        let toolboxBikeName = document.querySelector(".bike-name-placeholder");
        toolboxBikeName.innerHTML = fetchedData.bikeName;
        toolboxBikeName.style.color = fetchedData.bikeColor;

        logKnowndata();

        //displays and move the view to the parts registry zone
        let partsZone = document.querySelector(".partsZone");
        partsZone.style.display = "grid";
        partsZone.scrollIntoView({ behavior: "smooth" });


    }

}); // code here written with the help of chatGPT. I use event delegation to make sure I attach the event listeners only after the bikeobjects are created. My issue in my original code commented below was that my bikeContainers array was empty because the code ran before the bikes were created.

// function setupBikeListeners() {
//     for (let i = 0; i < bikeContainers.length; i++) {

//         let bikeContainer = bikeContainers[i];

//         bikeContainer.addEventListener("click", function () {

//             let partsZone = document.querySelector(".partsZone");

//             console.log("bike object clicked!");

//             partsZone.style.display = "grid";



//         });
//     };
// };


let submitRegister = document.getElementById("complete-bike-details");

submitRegister.addEventListener("submit", function (event) {
    event.preventDefault();
    registerParts();
    logKnowndata();
})


function registerParts() {

    let bikeData = {
        bikeName: document.getElementById("toolboxNameInput").value,
        bikeColor: bikeInfo.bikeColor,
        bikeType: document.getElementById("toolboxTypeInput").value,
        bikeHandlebars: document.getElementById("handlebarsInput").value,
        bikeFrame: document.getElementById("frameInput").value,
        bikeSize: document.getElementById("sizeInput").value,
        bikeWheels: document.getElementById("wheelsInput").value,
        bikeTires: document.getElementById("tiresInput").value,
        bikeRearDerailleur: document.getElementById("rearDerailleurInput").value,
        bikeFrontDerailleur: document.getElementById("frontDerailleurInput").value,
        bikeCassette: document.getElementById("cassetteInput").value,
        bikePlateau: document.getElementById("plateauInput").value,
        bikeCranks: document.getElementById("cranksInput").value,
        bikePedals: document.getElementById("pedalsInput").value,
    }

    let key = currentBikeId;

    localStorage.setItem(key, JSON.stringify(bikeData));

    let bikeDataString = localStorage.getItem(currentBikeId);
    bikeInfo = JSON.parse(bikeDataString);
    console.log(bikeInfo);


}

function logKnowndata() {

    document.getElementById("toolboxNameInput").value = bikeInfo.bikeName;
    document.getElementById("toolboxTypeInput").value = bikeInfo.bikeType;

    //only log info if we already have the tags created in local storage. else, let user define info for the first time
    if (bikeInfo.bikeHandlebars ||
        bikeInfo.bikeFrame ||
        bikeInfo.bikeSize ||
        bikeInfo.bikeWheels ||
        bikeInfo.bikeTires ||
        bikeInfo.bikeRearDerailleur ||
        bikeInfo.bikeFrontDerailleur ||
        bikeInfo.bikeCassette ||
        bikeInfo.bikePlateau ||
        bikeInfo.bikeCranks ||
        bikeInfo.bikePedals) {
        document.getElementById("handlebarsInput").value = bikeInfo.bikeHandlebars;
        document.getElementById("frameInput").value = bikeInfo.bikeFrame;
        document.getElementById("sizeInput").value = bikeInfo.bikeSize;
        document.getElementById("wheelsInput").value = bikeInfo.bikeWheels;
        document.getElementById("tiresInput").value = bikeInfo.bikeTires;
        document.getElementById("rearDerailleurInput").value = bikeInfo.bikeRearDerailleur;
        document.getElementById("frontDerailleurInput").value = bikeInfo.bikeFrontDerailleur;
        document.getElementById("cassetteInput").value = bikeInfo.bikeCassette;
        document.getElementById("plateauInput").value = bikeInfo.bikePlateau;
        document.getElementById("cranksInput").value = bikeInfo.bikeCranks;
        document.getElementById("pedalsInput").value = bikeInfo.bikePedals;
    }
    else {
        document.getElementById("handlebarsInput").value = "";
        document.getElementById("frameInput").value = "";
        document.getElementById("sizeInput").value = "";
        document.getElementById("wheelsInput").value = "";
        document.getElementById("tiresInput").value = "";
        document.getElementById("rearDerailleurInput").value = "";
        document.getElementById("frontDerailleurInput").value = "";
        document.getElementById("cassetteInput").value = "";
        document.getElementById("plateauInput").value = "";
        document.getElementById("cranksInput").value = "";
        document.getElementById("pedalsInput").value = "";

    }
}

let eraseButton = document.querySelector(".erase-memory-button");
eraseButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
})