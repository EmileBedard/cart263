
let toolbox = document.querySelector(".toolbox");


document.addEventListener("click", function (event) {

    if (event.target.closest(".bikeObject")) {

        console.log(event.target.closest(".bikeObject").id);

        let bikeId = event.target.closest(".bikeObject").id

        let bikeDataString = localStorage.getItem(bikeId);
        let fetchedData = JSON.parse(bikeDataString);
        console.log(fetchedData);

        let infographicTitle = document.getElementById("infographic-name")
        infographicTitle.style.color = fetchedData.bikeColor;
        infographicTitle.innerHTML = "Anatomy Of " + fetchedData.bikeName;

        let emptyFrameSVG = document.getElementById("empty-frame").style.stroke = fetchedData.bikeColor

        let toolboxBikeName = document.querySelector(".bike-name-placeholder");
        toolboxBikeName.innerHTML = fetchedData.bikeName;
        toolboxBikeName.style.color = fetchedData.bikeColor;


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

